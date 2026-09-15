import { readdir, stat } from 'node:fs/promises'
import { join, dirname, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = process.stdout

async function listFiles(dirPath) {
  try {
    const entries = await readdir(dirPath)
    const files = []
    for (const entry of entries) {
      const full = join(dirPath, entry)
      if ((await stat(full)).isDirectory()) files.push(...(await listFiles(full)))
      else files.push(full)
    }
    return files
  } catch {
    return []
  }
}

const targetDir = process.argv[2] ? join(root, process.argv[2]) : null

const groups = [
  {
    name: 'slides (dist/assets/slide*.png → src/assets/*.webp)',
    dir: join(root, 'dist/assets'),
    match: /^slide(\d+)\.png$/i,
    outDir: join(root, 'src/assets'),
    quality: 78,
  },
  {
    name: 'maillots (src/assets/maillot_*.png → .webp)',
    dir: join(root, 'src/assets'),
    match: /^maillot_.*\.png$/i,
    outDir: join(root, 'src/assets'),
    quality: 85,
  },
  {
    name: 'cards (src/assets/card*.jpg|png → .webp)',
    dir: join(root, 'src/assets'),
    match: /^card.*\.(png|jpe?g)$/i,
    outDir: join(root, 'src/assets'),
    quality: 80,
  },
  {
    name: 'logos (public/logos/logo*.png → .webp)',
    dir: join(root, 'public/logos'),
    match: /^logo.*\.png$/i,
    outDir: join(root, 'public/logos'),
    quality: 85,
  },
  {
    name: 'players (public/players/*.{png,jpg} → .webp)',
    dir: join(root, 'public/players'),
    match: /\.(png|jpe?g)$/i,
    outDir: join(root, 'public/players'),
    quality: 85,
  },
]

let totalBefore = 0
let totalAfter = 0

for (const group of groups) {
  let files = group.dir === join(root, 'dist/assets') ? await listFiles(group.dir) : (await listFiles(group.dir))
  files = files.filter((f) => group.match.test(basename(f)))
  if (targetDir && !group.dir.startsWith(targetDir)) continue

  if (!files.length) {
    out.write(`- ${group.name} : aucun fichier (ignoré)\n`)
    continue
  }

  out.write(`\n== ${group.name} ==\n`)
  for (const file of files) {
    const input = join(root, group.dir === join(root, 'dist/assets') ? 'dist/assets' : file)
    const outFile = join(
      group.outDir,
      basename(file).replace(/\.(png|jpe?g)$/i, '') + '.webp',
    )
    const before = (await stat(file)).size
    try {
      await sharp(file).webp({ quality: group.quality, effort: 6 }).toFile(outFile)
      const after = (await stat(outFile)).size
      totalBefore += before
      totalAfter += after
      out.write(
        `  ${basename(file)} → ${basename(outFile)} : ${(before / 1024).toFixed(1)} Ko → ${(after / 1024).toFixed(1)} Ko (${Math.round((1 - after / before) * 100)}%)\n`,
      )
    } catch (err) {
      out.write(`  ${basename(file)} : ERREUR ${err.message}\n`)
    }
  }
}

out.write(
  `\nTotal : ${(totalBefore / 1024 / 1024).toFixed(1)} Mo → ${(totalAfter / 1024 / 1024).toFixed(1)} Mo (${Math.round((1 - totalAfter / totalBefore) * 100)}% économisés)\n`,
)