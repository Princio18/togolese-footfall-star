import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronUp, CircleHelp, Menu, Shirt, X } from 'lucide-react'
import type { IconType } from 'react-icons'
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import adeVideo from './assets/ade.mp4'
import videoMetz from './assets/video-metz.mp4'
import videoAsm from './assets/video-asm.mp4'
import videoArs from './assets/video-ars.mp4'
import videoMci from './assets/video-mci.mp4'
import videoRma from './assets/video-rma.mp4'
import videoTott from './assets/video-tott.mp4'
import videoCry from './assets/video-cry.mp4'
import videoTg from './assets/video-tg.mp4'
import maillotAvant from './assets/maillot_avant_ars.webp'
import maillotArriere from './assets/maillot_arriere_ars.webp'
import maillotMciAvant from './assets/maillot_avant_mci.webp'
import maillotMciArriere from './assets/maillot_arriere_mci.webp'
import maillotRmaAvant from './assets/maillot_avant_rma.webp'
import maillotRmaArriere from './assets/maillot_arriere_rma.webp'
import maillotTottAvant from './assets/maillot_avant_tott.webp'
import maillotTottArriere from './assets/maillot_arriere_tott.webp'
import maillotAsmAvant from './assets/maillot_avant_asm.webp'
import maillotAsmArriere from './assets/maillot_arriere_asm.webp'
import maillotFcmAvant from './assets/maillot_avant_fcm.webp'
import maillotFcmArriere from './assets/maillot_arriere_fcm.webp'
import maillotTotalAvant from './assets/maillot_avant_total.webp'
import maillotTotalArriere from './assets/maillot_arriere_total.webp'
import maillotCryAvant from './assets/maillot_avant_cry.webp'
import maillotCryArriere from './assets/maillot_arriere_cry.webp'
import card1 from './assets/card1.webp'
import card2 from './assets/card2.webp'
import card3 from './assets/card3.webp'
import card4 from './assets/card4.webp'
import card5 from './assets/card5.webp'
import slide1Bgc from './assets/slide1.webp'
import slide4Bgc from './assets/slide4.webp'
import slide5Bgc from './assets/slide5.webp'
import slide6Bgc from './assets/slide6.webp'
import slide7Bgc from './assets/slide7.webp'
import slide8Bgc from './assets/slide8.webp'
import slide9Bgc from './assets/slide9.webp'
import slide10Bgc from './assets/slide10.webp'
import slide12Bgc from './assets/slide12.webp'
import slide0Bgc from './assets/slide0.webp'
import slide2Bgc from './assets/slide2.webp'
import slide3Bgc from './assets/slide3.webp'

const NAV_ITEMS = [
  { label: 'SEA', id: 'sea' },
  { label: 'WELCOME', id: 'welcome' },
  { label: 'BEST STATS', id: 'best-stats' },
  { label: 'CAREER HIGHLIGHT', id: 'career-highlight' },
  { label: 'CAREER STATS', id: 'career-stats' },
  { label: 'PARTNERS', id: 'partners' },
]

const HIGHLIGHTS = [
  {
    label: 'PHOTO 1',
    title: 'WHERE IT ALL BEGAN',
    description: "Emmanuel's professional debut — the first step of a journey across Europe's biggest stages.",
    linkText: 'VIEW METZ',
  },
  {
    label: 'PHOTO 2',
    title: 'RISING ON THE ROCK',
    description: "Three seasons that turned raw talent into one of Ligue 1's most feared strikers.",
    linkText: 'VIEW MONACO',
  },
  {
    label: 'PHOTO 3',
    title: 'BLUE MOON RISING',
    description: "A club-record move that made Emmanuel one of City's first Premier League stars.",
    linkText: 'VIEW MAN CITY',
  },
  {
    label: 'PHOTO 4',
    title: 'THE GUNNER YEARS',
    description: '62 goals in a red shirt — the season that announced him to the world.',
    linkText: 'VIEW ARSENAL',
  },
  {
    label: 'PHOTO 5',
    title: 'A GALÁCTICO SEASON',
    description: "A loan spell among the Galácticos, sharpening his edge on football's biggest stage.",
    linkText: 'VIEW REAL MADRID',
  },
]

const PLAYER_IMAGES = [
  '/players/adebayor1.webp',
  '/players/adebayor2.webp',
  '/players/adebayor3.webp',
  '/players/adebayor4.webp',
  '/players/adebayor5.webp',
  '/players/adebayor6.webp',
  '/players/adebayor7.webp',
  '/players/adebayor8.webp',
  '/players/adebayor9.webp',
]

const SOCIAL_LINKS: { name: string; href: string }[] = [
  { name: 'Instagram', href: '' },
  { name: 'Twitter', href: '' },
  { name: 'Snapchat', href: '' },
  { name: 'TikTok', href: '' },
  { name: 'Facebook', href: '' },
]

const SOCIAL_ICONS: Record<string, IconType> = {
  Instagram: FaInstagram,
  Twitter: FaXTwitter,
  Snapchat: FaSnapchat,
  TikTok: FaTiktok,
  Facebook: FaFacebook,
}

const CARD_IMAGES = [card1, card2, card3, card4, card5]

interface ClubStat {
  clubLogo: string
  clubName: string
  matchesPlayed: string
  shotsOnTarget: string
  goalsScored: string
  assists: string
  duration: string
  statLink: string
}

const CLUB_STATS: ClubStat[] = [
  {
    clubLogo: '/logos/Monaco.png',
    clubName: 'AS Monaco',
    matchesPlayed: '115',
    shotsOnTarget: '',
    goalsScored: '26',
    assists: '6',
    duration: '31/07/2003 - 13/01/2006',
    statLink: '',
  },
  {
    clubLogo: '/logos/arsenal.png',
    clubName: 'Arsenal FC',
    matchesPlayed: '142',
    shotsOnTarget: '-',
    goalsScored: '62',
    assists: '15',
    duration: '13/01/2006 - 18/07/2009',
    statLink: '',
  },
  {
    clubLogo: '/logos/Tottenham.png?v=3',
    clubName: 'Tottenham Hotspur',
    matchesPlayed: '113',
    shotsOnTarget: '',
    goalsScored: '42',
    assists: '20',
    duration: '25/08/2011 - 13/09/2015',
    statLink: '',
  },
]

const STAT_ROWS = [
  { label: 'Matches Played', value: 'matchesPlayed' },
  { label: 'Shots on Target', value: 'shotsOnTarget' },
  { label: 'Goals Scored', value: 'goalsScored' },
  { label: 'Assists', value: 'assists' },
  { label: 'Duration', value: 'duration' },
] as const

function ClubStatCard({ stat, tall }: { stat: ClubStat; tall?: boolean }) {
  const hasLogo = Boolean(stat.clubLogo)

  return (
    <div
      className={`relative min-w-0 px-5 pt-[36px] flex flex-col font-montserrat shadow-md rounded-lg ${
        tall ? 'flex-[1.4] min-h-[510px] pb-12 shadow-xl' : 'flex-1 min-h-[370px] pb-6'
      } ${hasLogo ? 'bg-[#16161d]' : 'bg-[#0d0d10]'}`}
    >
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg bg-black border border-[#fc8700] flex items-center justify-center p-2 shrink-0 ${
        tall ? 'w-[56px] h-[56px]' : 'w-[48px] h-[48px]'
      }`}>
        {hasLogo ? (
          <img
            src={stat.clubLogo}
            alt={stat.clubName}
            className="w-full h-full object-contain"
          />
        ) : (
          <CircleHelp size={24} className="text-[#6e6e6e]" />
        )}
      </div>

      <div className={`text-center border-b border-white/10 ${tall ? 'pb-6 mb-6' : 'pb-3 mb-3'}`}>
        {stat.clubName ? (
          <span className={`font-bold text-white whitespace-nowrap ${tall ? 'text-lg' : 'text-base'}`}>{stat.clubName}</span>
        ) : (
          <span className={`font-bold text-white/50 whitespace-nowrap ${tall ? 'text-lg' : 'text-base'}`}>Club Name</span>
        )}
      </div>

      {STAT_ROWS.map((row) => (
        <div key={row.label} className="mt-3 flex flex-col items-center text-center">
          <span className={`uppercase font-light tracking-wide text-white/50 whitespace-nowrap ${tall ? 'text-[13px]' : 'text-xs'}`}>
            {row.label}
          </span>
          <span
            className={`mt-0.5 font-bold text-white whitespace-nowrap ${
              row.value === 'duration' ? (tall ? 'text-sm' : 'text-xs') : tall ? 'text-base' : 'text-sm'
            }`}
          >
            {stat[row.value] || '—'}
          </span>
        </div>
      ))}

      <div className={`mt-auto ${tall ? 'pt-10' : 'pt-4'}`}>
        <a
          href={stat.statLink || '#'}
          className="block w-full text-center rounded-full border border-[#fc8700] text-[#fc8700] hover:bg-[#fc8700] hover:text-black transition-colors duration-300 py-2 text-xs uppercase tracking-wide whitespace-nowrap"
        >
          View More Stat
        </a>
      </div>
    </div>
  )
}

interface ClubSlide {
  code: string
  fullName: string
  country: string
  period: string
  background: string
  matchesPlayed: number
  clubMatchesTotal: number
  goalsScored: number
  clubGoalsTotal: number
  assists: number
  clubAssistsTotal: number
  quote: string
  jerseyImage: string
  jerseyBack: string
  coaches: string[]
}

const CLUB_SLIDES: ClubSlide[] = [
  {
    code: 'FCM',
    fullName: 'FC Metz',
    country: 'France',
    period: '01/08/2001 - 01/08/2003',
    background: slide1Bgc,
    matchesPlayed: 51,
    clubMatchesTotal: 90,
    goalsScored: 17,
    clubGoalsTotal: 102,
    assists: 4,
    clubAssistsTotal: 26,
    quote: 'Albert Cartier, who coached him during his professional debut, used a now-famous metaphor, calling him the \'Adebayor thermostat.\' He described him as \'a regulator for the team\'s temperature, someone who shapes your attacking play through his movement and agility in front of the goal.',
    jerseyImage: maillotFcmAvant,
    jerseyBack: maillotFcmArriere,
    coaches: ['Albert Cartier', 'Jean Fernandez'],
  },
  {
    code: 'ASM',
    fullName: 'AS Monaco',
    country: 'France',
    period: '31/07/2003 - 13/01/2006',
    background: slide2Bgc,
    matchesPlayed: 115,
    clubMatchesTotal: 161,
    goalsScored: 26,
    clubGoalsTotal: 242,
    assists: 6,
    clubAssistsTotal: 138,
    quote: 'AS Monaco remembers a young, talented, and combative Adebayor, who actively contributed to one of the finest chapters in the club\'s modern history by helping them reach the Champions League final in 2004.',
    jerseyImage: maillotAsmAvant,
    jerseyBack: maillotAsmArriere,
    coaches: ['Didier Deschamps', 'Francesco Guidolin'],
  },
  {
    code: 'ARS',
    fullName: 'Arsenal FC',
    country: 'England',
    period: '13/01/2006 - 18/07/2009',
    background: slide3Bgc,
    matchesPlayed: 142,
    clubMatchesTotal: 173,
    goalsScored: 62,
    clubGoalsTotal: 323,
    assists: 15,
    clubAssistsTotal: 147,
    quote: 'During his time at Arsenal from 2006 to 2009, Emmanuel Adebayor really impressed his coach, Arsène Wenger. Wenger especially liked his physical strength, his power and his ability to score goals. Wenger said that Adebayor had "exceptional physical qualities and a real sense of goal."',
    jerseyImage: maillotAvant,
    jerseyBack: maillotArriere,
    coaches: ['Arsène Wenger'],
  },
  {
    code: 'MCI',
    fullName: 'Manchester City',
    country: 'England',
    period: '18/07/2009 - 21/08/2012',
    background: slide4Bgc,
    matchesPlayed: 45,
    clubMatchesTotal: 162,
    goalsScored: 45,
    clubGoalsTotal: 322,
    assists: 5,
    clubAssistsTotal: 166,
    quote: 'Premier League analysts praised his ability to drop deep and link up play. He had excellent ball protection and was great in the air, making him an immensely talented player.',
    jerseyImage: maillotMciAvant,
    jerseyBack: maillotMciArriere,
    coaches: ['Mark Hughes', 'Roberto Mancini'],
  },
  {
    code: 'RMA',
    fullName: 'Real Madrid',
    country: 'Spain',
    period: '25/01/2011 - 30/06/2011',
    background: slide5Bgc,
    matchesPlayed: 22,
    clubMatchesTotal: 58,
    goalsScored: 8,
    clubGoalsTotal: 121,
    assists: 0,
    clubAssistsTotal: 140,
    quote: 'Even after he left, when Adebayor visited the Real Madrid team during pre-season, José Mourinho publicly called him a member of the family, describing him as "one of us."',
    jerseyImage: maillotRmaAvant,
    jerseyBack: maillotRmaArriere,
    coaches: ['José Mourinho'],
  },
  {
    code: 'TOTT',
    fullName: 'Tottenham Hotspur',
    country: 'England',
    period: '25/08/2011 - 13/09/2015',
    background: slide6Bgc,
    matchesPlayed: 113,
    clubMatchesTotal: 218,
    goalsScored: 42,
    clubGoalsTotal: 365,
    assists: 20,
    clubAssistsTotal: 215,
    quote: 'Tim Sherwood praised his hard work: "When he plays like this, he is almost impossible to stop. He runs all day and gives everything for the team."',
    jerseyImage: maillotTottAvant,
    jerseyBack: maillotTottArriere,
    coaches: ['Harry Redknapp', 'André Villas-Boas', 'Tim Sherwood', 'Mauricio Pochettino'],
  },
  {
    code: 'CRY',
    fullName: 'Crystal Palace',
    country: 'England',
    period: '26/01/2016 - 30/06/2016',
    background: slide7Bgc,
    matchesPlayed: 15,
    clubMatchesTotal: 47,
    goalsScored: 1,
    clubGoalsTotal: 63,
    assists: 1,
    clubAssistsTotal: 41,
    quote: 'Crystal Palace remembers a player at the end of his career in England, who came for an emergency short-term spell that did not pay off, but who was still encouraged by the fans because of his big reputation in England.',
    jerseyImage: maillotCryAvant,
    jerseyBack: maillotCryArriere,
    coaches: ['Alan Pardew'],
  },
  {
    code: 'İBFK',
    fullName: 'İstanbul Başakşehir',
    country: 'Türkiye',
    period: '31/10/2017 - 20/06/2019',
    background: slide8Bgc,
    matchesPlayed: 76,
    clubMatchesTotal: 112,
    goalsScored: 28,
    clubGoalsTotal: 214,
    assists: 8,
    clubAssistsTotal: 148,
    quote: 'At İstanbul Başakşehir, the memory of Adebayor is particularly warm, positive, and respectful, because his time in Turkey between 2017 and 2019 is seen as a huge collective success and a priceless spotlight for this young club that was then on the rise.',
    jerseyImage: '',
    jerseyBack: '',
    coaches: ['Abdullah Avcı'],
  },
  {
    code: 'KAY',
    fullName: 'Kayserispor',
    country: 'Türkiye',
    period: '26/08/2019 - 03/12/2019',
    background: slide9Bgc,
    matchesPlayed: 8,
    clubMatchesTotal: 41,
    goalsScored: 2,
    clubGoalsTotal: 49,
    assists: 1,
    clubAssistsTotal: 29,
    quote: 'When he signed, Kayserispor hoped that Adebayor\'s experience would help the team stay at the highest level. Adebayor left a lasting impression on his teammates with his professionalism.',
    jerseyImage: '',
    jerseyBack: '',
    coaches: ['Hikmet Karaman', 'Samet Aybaba', 'Bülent Uygun'],
  },
  {
    code: 'Olimpia',
    fullName: 'Club Olimpia',
    country: 'Paraguay',
    period: '11/02/2020 - 30/06/2020',
    background: slide10Bgc,
    matchesPlayed: 4,
    clubMatchesTotal: 42,
    goalsScored: 0,
    clubGoalsTotal: 73,
    assists: 0,
    clubAssistsTotal: 44,
    quote: 'Despite his declining performances, the Paraguayan club thanked and praised Adebayor\'s efforts.',
    jerseyImage: '',
    jerseyBack: '',
    coaches: ['Daniel Garnero'],
  },
  {
    code: 'TG',
    fullName: 'Épervier',
    country: 'Togo',
    period: '08/07/2000 - 24/03/2019',
    background: slide12Bgc,
    matchesPlayed: 88,
    clubMatchesTotal: 165,
    goalsScored: 32,
    clubGoalsTotal: 174,
    assists: 6,
    clubAssistsTotal: 95,
    quote: 'The Togolese national team and its former coaches consider Emmanuel Adebayor as an undisputed legend of Togolese football.',
    jerseyImage: '',
    jerseyBack: '',
    coaches: ['Gottlieb Göller', 'Kodjovi Mawuéna', 'Bana Tchanilé', 'Diego Garzitto', 'Antônio Dumas', 'Stephen Keshi', 'Otto Pfister', 'Henri Stambouli', 'Jean Thissen', 'Hubert Velud', 'Thierry Froger', 'Didier Six', 'Tchanilé Tchakala', 'Tom Saintfiet', 'Claude Le Roy'],
  },
  {
    code: 'TOTAL',
    fullName: 'Emmanuel Sheyi Adebayor',
    country: 'Togolese',
    period: '01/08/2001 - 24/03/2019',
    background: slide0Bgc,
    matchesPlayed: 0,
    clubMatchesTotal: 0,
    goalsScored: 0,
    clubGoalsTotal: 0,
    assists: 0,
    clubAssistsTotal: 0,
    quote: 'Emmanuel Sheyi Adebayor is a Togolese forward whose powerful, dynamic style took him through some of Europe\'s biggest clubs — from AS Monaco and Arsenal to Manchester City, Real Madrid, and Tottenham — leaving behind standout scoring seasons and unforgettable moments at every stop. Beyond the trophies and goals, he became Togo\'s all-time record scorer and a source of national pride, inspiring a generation with a career built on resilience, versatility, and an unmistakable will to win.',
    jerseyImage: maillotTotalAvant,
    jerseyBack: maillotTotalArriere,
    coaches: [],
  },
]

const CLUB_TABS = CLUB_SLIDES.filter((s) => s.code !== 'TOTAL')

const CLUB_VIDEO_CODES = CLUB_SLIDES.filter(
  (s) => s.code !== 'TOTAL' && s.code !== 'KAY' && s.code !== 'Olimpia',
).map((s) => s.code)

interface CareerHighlightItem {
  videoSrc: string
  clubLogo: string
  clubName: string
}

const CLUB_LOGO_PATHS: Record<string, string> = {
  FCM: '/logos/logo-fcm.webp',
  ASM: '/logos/logo-asm.webp',
  ARS: '/logos/logo-arsenal.webp',
  MCI: '/logos/logo-mci.webp',
  RMA: '/logos/logo-rma.webp',
  TOTT: '/logos/logo-tott.webp?v=2',
  CRY: '/logos/logo-cry.webp',
  İBFK: '/logos/logo-ibfk.webp',
  TG: '/logos/logo-tg.webp',
}

const CLUB_VIDEO_FILES: Record<string, string> = {
  FCM: videoMetz,
  ASM: videoAsm,
  ARS: videoArs,
  MCI: videoMci,
  RMA: videoRma,
  TOTT: videoTott,
  CRY: videoCry,
  İBFK: '/video-ibfk.mp4',
  TG: videoTg,
}

const CLUB_HIGHLIGHT_NAMES: Record<string, string> = {
  TG: 'Equipe Nationale Togolaise',
}

const CAREER_HIGHLIGHTS: CareerHighlightItem[] = CLUB_VIDEO_CODES.map((code) => ({
  videoSrc: CLUB_VIDEO_FILES[code] ?? '',
  clubLogo: CLUB_LOGO_PATHS[code] ?? '',
  clubName:
    CLUB_HIGHLIGHT_NAMES[code] ??
    CLUB_SLIDES.find((s) => s.code === code)?.fullName ??
    code,
}))

const ANIM_DELAY = 4000
const ANIM_DURATION = 1200

const CLUB_BAR_COLORS: Record<string, string> = {
  FCM: '#8a1e2a',
  ASM: '#d9021a',
  ARS: '#023474',
  MCI: '#6fa3de',
  RMA: '#2365d8',
  TOTT: '#c3a000',
  CRY: '#2365d8',
  'İBFK': '#ff550d',
  KAY: '#ffa700',
  Olimpia: '#d9021a',
  TG: '#02b726',
  TOTAL: '#ffffff',
}

const CLUB_BAR_TEXT_OVERRIDES: Record<string, string> = {
  MCI: '#ffffff',
  TOTT: '#ffffff',
  TG: '#ffffff',
  KAY: '#ffffff',
}

const barTextColor = (hex: string) => {
  const value = hex.replace('#', '')
  const full = value.length === 3 ? value.split('').map((c) => c + c).join('') : value
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6 ? '#000000' : '#ffffff'
}

const ratioOf = (player: number, club: number) =>
  club > 0 ? Math.min(player / club, 1) : 0

const formatRatio = (value: number) =>
  value.toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

function useCountUp(
  target: number,
  duration: number,
  active: boolean,
  precision = 0,
): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) {
      setValue(0)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Number((target * eased).toFixed(precision)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, active, precision])

  return value
}

interface StatBlockProps {
  label: string
  barColor: string
  barTextColor: string
  raw: number
  ratio: number
  ratioCount: number
  ratioVisible: boolean
  active: boolean
}

function StatBlock({
  label,
  barColor,
  barTextColor: barText,
  raw,
  ratio,
  ratioCount,
  ratioVisible,
  active,
}: StatBlockProps) {
  const width = active ? `${Math.round(ratio * 100)}%` : '0%'

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="relative h-8 flex-1 overflow-hidden rounded-md">
          <div
            className="absolute inset-y-0 left-0 rounded-md"
            style={{ width, background: barColor, transition: 'width 1.2s ease-out' }}
          />
          <span className="relative z-10 flex h-full items-center px-3 font-montserrat text-xs font-bold uppercase tracking-wide whitespace-nowrap" style={{ color: barText }}>
            {label}
          </span>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 font-montserrat text-sm font-bold text-white">
          {raw}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-[10px] flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full opacity-50"
            style={{ width, background: barColor, transition: 'width 1.2s ease-out' }}
          />
        </div>
        <span className="font-montserrat text-[11px] uppercase text-white/40">RATIO</span>
        <span className="font-montserrat text-sm font-bold whitespace-nowrap text-white">
          {ratioVisible ? formatRatio(ratioCount) : '-'}
        </span>
      </div>
    </div>
  )
}

function CareerStatsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animated, setAnimated] = useState(false)
  const autoTimer = useRef<number | undefined>(undefined)
  const coachTrackRef = useRef<HTMLDivElement | null>(null)
  const [coachesOverflow, setCoachesOverflow] = useState(false)

  const total = CLUB_SLIDES.length
  const slide = CLUB_SLIDES[currentIndex]

  const startAuto = () => {
    if (autoTimer.current !== undefined) window.clearInterval(autoTimer.current)
    autoTimer.current = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % total)
    }, 15000)
  }

  useEffect(() => {
    startAuto()
    return () => {
      if (autoTimer.current !== undefined) window.clearInterval(autoTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setAnimated(false)
    const timeout = window.setTimeout(() => setAnimated(true), ANIM_DELAY)
    return () => window.clearTimeout(timeout)
  }, [currentIndex])

  useEffect(() => {
    const el = coachTrackRef.current
    if (!el) return
    setCoachesOverflow(el.scrollWidth > el.clientWidth)
  }, [currentIndex])

  const scrollCoaches = (direction: number) => {
    coachTrackRef.current?.scrollBy({ left: direction * 140, behavior: 'smooth' })
  }

  const goTo = (index: number) => {
    setCurrentIndex(index)
    startAuto()
  }

  const isTotal = slide.code === 'TOTAL'
  const stats = isTotal
    ? CLUB_SLIDES.filter((s) => s.code !== 'TOTAL').reduce(
        (acc, s) => ({
          matchesPlayed: acc.matchesPlayed + s.matchesPlayed,
          clubMatchesTotal: acc.clubMatchesTotal + s.clubMatchesTotal,
          goalsScored: acc.goalsScored + s.goalsScored,
          clubGoalsTotal: acc.clubGoalsTotal + s.clubGoalsTotal,
          assists: acc.assists + s.assists,
          clubAssistsTotal: acc.clubAssistsTotal + s.clubAssistsTotal,
        }),
        {
          matchesPlayed: 0,
          clubMatchesTotal: 0,
          goalsScored: 0,
          clubGoalsTotal: 0,
          assists: 0,
          clubAssistsTotal: 0,
        }
      )
    : slide

  const matchesRatio = ratioOf(stats.matchesPlayed, stats.clubMatchesTotal)
  const goalsRatio = ratioOf(stats.goalsScored, stats.clubGoalsTotal)
  const assistsRatio = ratioOf(stats.assists, stats.clubAssistsTotal)

  const matchesCount = useCountUp(stats.matchesPlayed, ANIM_DURATION, animated)
  const goalsCount = useCountUp(stats.goalsScored, ANIM_DURATION, animated)
  const assistsCount = useCountUp(stats.assists, ANIM_DURATION, animated)
  const matchesRatioCount = useCountUp(matchesRatio, ANIM_DURATION, animated, 2)
  const goalsRatioCount = useCountUp(goalsRatio, ANIM_DURATION, animated, 2)
  const assistsRatioCount = useCountUp(assistsRatio, ANIM_DURATION, animated, 2)

  const barColor = CLUB_BAR_COLORS[slide.code] || '#fc8700'
  const barTextColorValue = CLUB_BAR_TEXT_OVERRIDES[slide.code] || barTextColor(barColor)

  return (
    <section
      id="career-stats"
      className="scroll-mt-[46px] relative overflow-hidden bg-black h-[88vh] min-h-[680px]"
      onMouseEnter={() => {
        if (autoTimer.current !== undefined) window.clearInterval(autoTimer.current)
        autoTimer.current = undefined
      }}
      onMouseLeave={() => startAuto()}
    >
      {CLUB_SLIDES.map((s, i) => (
        <div
          key={s.code}
          className={`absolute inset-0 transition-opacity duration-[600ms] ${
            i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          {s.background ? (
            <img
              src={s.background}
              alt={s.fullName || s.code}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black" />
          )}
        </div>
      ))}

      <div className="relative z-20 flex flex-col gap-6 p-6">
        <div
          className="w-full rounded-[12px] px-4 py-3 backdrop-blur-lg"
          style={{
            background: 'rgba(0,0,0,0.38)',
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <span className="justify-self-start shrink-0 font-montserrat text-xl font-bold whitespace-nowrap text-white">
              ALL STATS
            </span>
            <div className="justify-self-center max-w-full overflow-x-auto">
              <div className="flex items-center gap-1.5">
                {CLUB_TABS.map((tab, i) => (
                  <button
                    key={tab.code}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`font-montserrat text-xs uppercase whitespace-nowrap rounded-full px-2.5 py-1 transition-colors duration-200 ${
                      currentIndex === i
                        ? 'bg-[#fc8700] text-black'
                        : 'bg-transparent text-white/60 hover:text-white'
                    }`}
                  >
                    {tab.code}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => goTo(total - 1)}
              className={`justify-self-end shrink-0 font-montserrat text-xs uppercase whitespace-nowrap rounded-full border px-2.5 py-1 transition-colors duration-200 ${
                currentIndex === total - 1
                  ? 'border-[#fc8700] bg-[#fc8700] text-black'
                  : 'border-white bg-transparent text-white/60 hover:text-white'
              }`}
            >
              TOTAL
            </button>
          </div>
        </div>

      <div className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:gap-2 lg:h-[420px]">
        <div
          className="flex h-[200px] w-full items-center justify-center overflow-visible lg:h-full lg:w-[30%]"
          style={{ perspective: '1000px' }}
        >
          {slide.jerseyImage ? (
            <div className="maillot-spin grid h-full max-h-[320px] aspect-[447/558] grid-cols-1 [grid-template-areas:'m']">
              <img
                src={slide.jerseyImage}
                alt={`Maillot ${slide.fullName || slide.code} (avant)`}
                className="maillot-face h-full w-full object-contain [grid-area:m]"
              />
              {slide.jerseyBack && (
                <img
                  src={slide.jerseyBack}
                  alt={`Maillot ${slide.fullName || slide.code} (arrière)`}
                  className="maillot-face h-full w-full object-contain [grid-area:m]"
                  style={{ transform: 'rotateY(180deg)' }}
                />
              )}
            </div>
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10">
              <Shirt size={24} className="text-white/10" />
            </div>
          )}
        </div>

        <div
          className="flex w-full flex-col gap-5 overflow-auto rounded-[12px] p-6 backdrop-blur-lg lg:w-[70%] lg:p-8"
          style={{
            background: 'rgba(0,0,0,0.38)',
            border: '1px solid rgba(255,255,255,0.08)',
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)',
          }}
        >
        <div className="flex flex-wrap gap-2">
          <span className="pointer-events-none rounded-full border border-white/20 px-3 py-1 font-montserrat text-xs text-white">
            {slide.fullName || '—'}
          </span>
          <span className="pointer-events-none rounded-full border border-white/20 px-3 py-1 font-montserrat text-xs text-white">
            {slide.country || '—'}
          </span>
          <span className="pointer-events-none rounded-full border border-white/20 px-3 py-1 font-montserrat text-xs text-white whitespace-nowrap">
            {slide.period || '—'}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <StatBlock
            label="Matches Played"
            barColor={barColor}
            barTextColor={barTextColorValue}
            raw={matchesCount}
            ratio={matchesRatio}
            ratioCount={matchesRatioCount}
            ratioVisible={stats.clubMatchesTotal > 0}
            active={animated}
          />
          <StatBlock
            label="Goals Scored"
            barColor={barColor}
            barTextColor={barTextColorValue}
            raw={goalsCount}
            ratio={goalsRatio}
            ratioCount={goalsRatioCount}
            ratioVisible={stats.clubGoalsTotal > 0}
            active={animated}
          />
          <StatBlock
            label="Assists"
            barColor={barColor}
            barTextColor={barTextColorValue}
            raw={assistsCount}
            ratio={assistsRatio}
            ratioCount={assistsRatioCount}
            ratioVisible={stats.clubAssistsTotal > 0}
            active={animated}
          />
        </div>

        {slide.coaches.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="font-montserrat text-xs font-bold uppercase tracking-wide text-white/50">
              COACH(S):
            </span>
            {coachesOverflow && (
              <button
                type="button"
                aria-label="Coach précédent"
                onClick={() => scrollCoaches(-1)}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-[#fc8700] hover:text-[#fc8700]"
              >
                <ChevronLeft size={14} />
              </button>
            )}
            <div
              ref={coachTrackRef}
              className="flex flex-1 flex-nowrap items-center gap-2 overflow-hidden whitespace-nowrap"
            >
              {slide.coaches.map((coach) => (
                <span
                  key={coach}
                  className="pointer-events-none rounded-full border border-white/20 px-3 py-1 font-montserrat text-xs text-white"
                >
                  {coach}
                </span>
              ))}
            </div>
            {coachesOverflow && (
              <button
                type="button"
                aria-label="Coach suivant"
                onClick={() => scrollCoaches(1)}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-[#fc8700] hover:text-[#fc8700]"
              >
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        )}
        </div>
        </div>

        {slide.quote && (
          <div
            key={currentIndex}
            className="quote-in pointer-events-none relative mx-auto w-[80%] max-w-[1000px] text-center"
          >
            <div className="relative">
              <span
                aria-hidden="true"
                className="font-playfair not-italic text-6xl leading-none text-[#fc8700]/45 absolute -top-7 -left-4"
              >
                “
              </span>
              <blockquote className="font-playfair text-sm italic leading-relaxed text-[#f0f0f0] [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] lg:text-base">
                {slide.quote}
              </blockquote>
              <span
                aria-hidden="true"
                className="font-playfair not-italic text-6xl leading-none text-[#fc8700]/45 absolute -bottom-9 -right-3"
              >
                ”
              </span>
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        aria-label="Slide précédente"
        onClick={() => goTo((currentIndex - 1 + total) % total)}
        className="absolute bottom-4 left-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors duration-200 hover:bg-black/70"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Slide suivante"
        onClick={() => goTo((currentIndex + 1) % total)}
        className="absolute bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors duration-200 hover:bg-black/70"
      >
        <ChevronRight size={20} />
      </button>

      </section>
  )
}

function CareerHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [phase, setPhase] = useState<'in' | 'out'>('in')
  const firstRender = useRef(true)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const length = CAREER_HIGHLIGHTS.length

  useEffect(() => {
    CAREER_HIGHLIGHTS.forEach((_, idx) => {
      const video = videoRefs.current[idx]
      if (!video) return
      if (idx === currentIndex) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [currentIndex])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    setPhase('out')
    let raf2 = 0
    const frame1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setPhase('in'))
    })
    const timer = window.setTimeout(() => setPrevIndex(null), 800)
    return () => {
      cancelAnimationFrame(frame1)
      cancelAnimationFrame(raf2)
      window.clearTimeout(timer)
    }
  }, [currentIndex])

  const slideStyle = (
    i: number,
  ): React.CSSProperties => {
    const isCurrent = i === currentIndex
    const isPrev = i === prevIndex
    return {
      opacity: isCurrent || isPrev ? 1 : 0,
      transform: isCurrent
        ? phase === 'in'
          ? 'translateX(0)'
          : 'translateX(100%)'
        : isPrev
          ? 'translateX(-100%)'
          : 'translateX(0)',
      transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease',
      willChange: 'transform, opacity',
      pointerEvents: isCurrent ? 'auto' : 'none',
      zIndex: isCurrent ? 2 : isPrev ? 1 : 0,
    }
  }

  return (
    <section
      id="career-highlight"
      className="scroll-mt-[46px] relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a]"
    >
      <div className="mx-auto flex w-full flex-col items-center gap-4 px-4 py-8 lg:h-[530px] lg:flex-row lg:items-center lg:gap-10 lg:px-12 lg:py-0">
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg lg:h-full lg:w-[70%]">
          <span className="pointer-events-none absolute top-6 right-6 z-30 font-montserrat font-bold uppercase tracking-wide text-[#fc8700]">
            CAREER HIGHLIGHT
          </span>
          {CAREER_HIGHLIGHTS.map((item, i) => (
            <div
              key={CLUB_VIDEO_CODES[i]}
              className="absolute inset-0 h-full w-full"
              style={slideStyle(i)}
            >
              {item.videoSrc ? (
                <video
                  src={item.videoSrc}
                  muted
                  playsInline
                  ref={(el) => {
                    videoRefs.current[i] = el
                  }}
                  className="h-full w-full object-cover"
                  onEnded={
                    i === currentIndex
                      ? () => {
                          setPrevIndex(i)
                          setCurrentIndex((i + 1) % length)
                        }
                      : undefined
                  }
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#141414] to-black">
                  <span className="font-montserrat text-sm uppercase tracking-wide text-white/20">
                    {CLUB_VIDEO_CODES[i]}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {(() => {
          const current = CAREER_HIGHLIGHTS[currentIndex]
          const currentCode = CLUB_VIDEO_CODES[currentIndex]
          return (
            <div className="lg:hidden flex w-full flex-col items-center gap-3 px-2 pb-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-lg">
                {current.clubLogo ? (
                  <img
                    src={current.clubLogo}
                    alt={current.clubName || currentCode}
                    className="h-full w-full object-contain p-2 grayscale"
                  />
                ) : (
                  <Shirt size={32} className="text-white/30" />
                )}
              </div>
              <div className="w-full px-2 text-center font-montserrat text-base font-semibold leading-tight text-white">
                {current.clubName || currentCode}
              </div>
            </div>
          )
        })()}

        <div className="hidden lg:block relative h-full" style={{ width: '20%' }}>
          {CAREER_HIGHLIGHTS.map((item, i) => (
            <div
              key={CLUB_VIDEO_CODES[i]}
              className="absolute inset-0 flex flex-col justify-center"
              style={slideStyle(i)}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-lg">
                  {item.clubLogo ? (
                    <img
                      src={item.clubLogo}
                      alt={item.clubName || CLUB_VIDEO_CODES[i]}
                      className="h-full w-full object-contain p-3 grayscale"
                    />
                  ) : (
                    <Shirt size={40} className="text-white/30" />
                  )}
                </div>
                <div className="mt-4 w-full px-2 text-center font-montserrat text-lg font-semibold leading-tight text-white">
                  {item.clubName || CLUB_VIDEO_CODES[i]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface Brand {
  name: string
  src: string
  href: string
}

const BRANDS: Brand[] = [
  { name: 'Power Horse', src: '/logos/logo1.webp', href: 'https://power-horse.com/' },
  { name: 'Bajaj', src: '/logos/logo2.webp', href: 'https://www.bajajauto.com/' },
  { name: 'Spiro', src: '/logos/logo3.webp', href: 'https://www.spironet.com/' },
  { name: 'ADE properties', src: '/logos/logo4.webp', href: 'https://adeproperties.ae/' },
  { name: 'CAF', src: '/logos/logo5.webp', href: 'https://www.cafonline.com/fr/' },
  { name: 'OTR', src: '/logos/logo6.webp', href: 'https://otr.tg/index.php/fr/' },
  { name: '22BET', src: '/logos/logo7.webp', href: 'https://22bet.com/fr' },
  { name: 'Adidas', src: '/logos/logo8.webp', href: 'https://www.adidas.fr/' },
  { name: 'Nike', src: '/logos/logo9.webp', href: 'https://www.nike.com/' },
  { name: 'TISMO', src: '/logos/logo10.webp', href: 'https://tismo.ch/fr/' },
  { name: 'CDK group', src: '/logos/logo11.webp', href: 'https://cdk-group.org/' },
  { name: 'Boxer', src: '/logos/logo12.webp', href: 'https://www.bajajauto.com/fr-tg' },
  { name: 'Ul-lomé', src: '/logos/logo13.webp', href: 'https://univ-lome.tg/' },
  { name: 'Sea foundation', src: '/logos/logo14.webp', href: 'https://fondationsea.com/' },
  { name: 'Morghan university', src: '/logos/logo15.webp', href: 'https://www.morgan.edu/' },
  { name: 'deLa cour', src: '/logos/logo16.webp', href: 'https://www.delacour.ch/' },
  { name: 'Spyder', src: '/logos/logo17.webp', href: 'https://can-am.brp.com/on-road/fr/fr/modeles.html' },
  { name: 'BMW', src: '/logos/logo18.webp', href: 'https://www.bmwusa.com/' },
  { name: 'Benz', src: '/logos/logo19.webp', href: 'https://www.mercedes-benz.fr/?srsltid=AU7gw4UdlJLmCHCTEEgBpHeR-jC8porcoCoC2Oxy2bK6Hg6apxkaWXLy' },
  { name: 'Porsche', src: '/logos/logo20.webp', href: 'https://www.porsche.com/france/' },
  { name: 'Rolls Royce', src: '/logos/logo21.webp', href: 'https://www.rolls-roycemotorcars.com/en_GB/home.html' },
  { name: 'Puma', src: '/logos/logo22.webp', href: 'https://eu.puma.com/fr/fr?srsltid=AU7gw4XkUERiutah8Tsy61sK4e5f_ZEsH-4uM6yXHc3xP2PWEbvs2-2n' },
  { name: 'Franc vila', src: '/logos/logo23.webp', href: 'https://www.francvila.ch/' },
  { name: 'Louis Vitton', src: '/logos/logo24.webp', href: 'https://us.louisvuitton.com/eng-us/homepage' },
  { name: 'Tecno mobile', src: '/logos/logo25.webp', href: 'https://www.tecno-mobile.com/tg/' },
]

function BrandCell({ brand }: { brand: Brand }) {
  const logo = brand.src ? (
    <div
      className="logo-mask"
      style={{ '--logo-url': `url(${brand.src})` } as CSSProperties}
    />
  ) : null

  const cellClass =
    'brand-cell flex items-center justify-center h-[110px] p-1 sm:p-2'

  if (brand.src && brand.href) {
    return (
      <a
        href={brand.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cellClass} cursor-pointer`}
      >
        {logo}
      </a>
    )
  }

  return <div className={cellClass}>{logo}</div>
}

interface HighlightCardProps {
  index: number
  isFeatured: boolean
  onHover: (index: number) => void
  type: 'video' | 'photo'
  label?: string
  title?: string
  description?: string
  linkText?: string
  src?: string
}

function HighlightCard({ index, isFeatured, onHover, type, label, title, description, linkText, src }: HighlightCardProps) {
  const isVideo = type === 'video'

  const wrapperClass = `group relative min-w-0 overflow-hidden rounded-[6px] bg-[#16161d] cursor-pointer transition-[flex-grow,height] duration-500 ease-in-out ${
    isFeatured
      ? 'grow-[1.85] shrink basis-0 h-[460px]'
      : 'grow shrink basis-0 h-[340px]'
  } max-lg:shrink-0 max-lg:w-[80%] max-lg:snap-center max-lg:h-[340px] max-lg:border max-lg:border-transparent max-lg:transition-[flex-grow,height] ${
    isFeatured ? 'max-lg:border-[#fc8700]' : ''
  }`

  const cardBody = (
    <>
      {isVideo ? (
        <video
          className={`absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-[transform,filter] duration-500 ${
            isFeatured ? 'scale-105' : 'scale-100'
          }`}
          autoPlay
          muted
          loop
          playsInline
          src={adeVideo}
        />
      ) : src ? (
        <img
          src={src}
          alt={label}
          className={`absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-[transform,filter] duration-500 ${
            isFeatured ? 'scale-105' : 'scale-100'
          }`}
        />
      ) : (
        <div
          className={`absolute inset-0 flex items-center justify-center text-[#3a3a42] font-montserrat text-sm transition-transform duration-700 ${
            isFeatured ? 'scale-105' : 'scale-100'
          }`}
        >
          {label}
        </div>
      )}

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ${
          isFeatured ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`absolute inset-0 z-10 flex flex-col items-start justify-end p-[24px] ${
          isFeatured ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col gap-[10px]">
          <h3 className="font-montserrat text-white uppercase font-bold">
            {isVideo ? (
              <span className="text-xl">
                <span className="font-light">CAREER</span>{' '}
                <span className="font-bold">HIGHLIGHTS</span>
              </span>
            ) : (
              <span className="text-lg">{title ?? 'SALUT'}</span>
            )}
          </h3>
          <p
            className={`font-montserrat text-white ${
              isVideo ? 'text-sm' : 'text-xs leading-relaxed'
            }`}
          >
            {description ?? "Emmanuel Sheyi Adebayor's highlights and archivements."}
          </p>
          {isVideo ? (
            <span className="inline-flex items-center gap-1 text-[#fc8700] font-montserrat text-xs uppercase tracking-wide">
              VIEW HIGHLIGHTS
              <ArrowRight size={14} />
            </span>
          ) : (
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[#fc8700] font-montserrat text-xs uppercase tracking-wide no-underline bg-transparent border-0 cursor-pointer"
            >
              {linkText ?? 'VIEW MORE'}
              <ArrowRight size={14} />
            </a>
          )}
        </div>
      </div>
    </>
  )

  return isVideo ? (
    <a
      href="#career-highlight"
      onMouseEnter={() => onHover(index)}
      className={wrapperClass}
    >
      {cardBody}
    </a>
  ) : (
    <div onMouseEnter={() => onHover(index)} className={wrapperClass}>
      {cardBody}
    </div>
  )
}

function Newsletter() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[720px] rounded-2xl bg-[#0b0b0b] px-12 pt-[86px] pb-[80px] text-center">
        <h2 className="text-xl lg:text-2xl font-bold uppercase tracking-[0.15em] text-white">
          GET IN TOUCH HERE!
        </h2>

        <p className="mx-auto mt-[45px] max-w-[380px] text-sm text-white/80">
          Mail me if you are interested in building a friendship with us.
        </p>

        <label htmlFor="newsletter-mail" className="mt-[27px] block text-sm lg:text-base font-semibold text-white">
          Set Your Mail!
        </label>

        <input
          id="newsletter-mail"
          type="email"
          placeholder="yourname@email.com"
          className="mt-[42px] block mx-auto w-full max-w-[347px] h-[48px] rounded-full bg-transparent border border-white/70 px-6 text-center text-white outline-none transition-colors duration-300 placeholder:text-white/40 focus:border-[#fc8700]"
        />

        <button
          type="button"
          className="mt-[14px] block mx-auto w-full max-w-[347px] h-[48px] rounded-full bg-[#fc8700] text-white uppercase font-bold text-sm tracking-wide transition-colors duration-300 hover:bg-[#e07a00]"
        >
          Let's Be In Touch
        </button>
      </div>

      <div className="mt-[52px] flex items-center justify-center gap-[20px]">
        {SOCIAL_LINKS.map((social) => {
          const Icon = SOCIAL_ICONS[social.name]
          const icon = (
            <Icon size={18} className="text-[#6e6e6e] transition-colors duration-300 hover:text-[#fc8700]" />
          )
          return social.href ? (
            <a key={social.name} href={social.href} aria-label={social.name} title={social.name}>
              {icon}
            </a>
          ) : (
            <span key={social.name} aria-label={social.name} title={social.name}>
              {icon}
            </span>
          )
        })}
      </div>
    </div>
  )
}

function WelcomeSection() {
  const [active, setActive] = useState(false)
  const [zOverlay, setZOverlay] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [returning, setReturning] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const WELCOME_IMAGE = '/players/adebayorr.webp'

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting)
        if (entry.isIntersecting) {
          setZOverlay(true)
          window.setTimeout(() => setZOverlay(false), 800)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = imgRef.current
    if (!img) return
    const rect = img.getBoundingClientRect()
    const relX = (e.clientX - (rect.left + rect.width / 2)) / rect.width
    const relY = (e.clientY - (rect.top + rect.height / 2)) / rect.height
    setReturning(false)
    setOffset({ x: relX * 15, y: relY * 15 })
  }

  const handleMouseLeave = () => {
    setReturning(true)
    setOffset({ x: 0, y: 0 })
  }

  const square1Class = `absolute bg-[#fc8700] transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
    active ? 'translate-x-0 opacity-100' : '-translate-x-[250px] opacity-0'
  } ${zOverlay ? 'z-40' : 'z-10'}`

  const square2Class = `absolute bg-[#fc8700] transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
    active ? 'translate-x-0 opacity-100' : 'translate-x-[250px] opacity-0'
  } ${zOverlay ? 'z-40' : 'z-10'}`

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="scroll-mt-[46px] min-h-screen flex items-center justify-center bg-[#000000] font-montserrat px-8 lg:px-[6%] py-[80px]"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[48px] lg:flex-row lg:items-center lg:justify-center">
        <div className="relative w-[390px] max-w-full aspect-[390/490] shrink-0">
          <div className={square1Class} style={{ width: '74%', height: '74%', left: '117px', top: '-16px' }} />
          <div className={square2Class} style={{ width: '74%', height: '74%', right: '117px', bottom: '-16px' }} />

          <div
            className={`absolute inset-0 z-30 transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              active ? 'translate-y-0 opacity-100 delay-[150ms]' : 'translate-y-[-80px] opacity-0'
            }`}
          >
            <img
              ref={imgRef}
              src={WELCOME_IMAGE}
              alt="Emmanuel Adebayor"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="h-full w-full rounded-sm object-cover"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: `transform ${returning ? '0.4s' : '0.2s'} ease-out`,
              }}
            />
          </div>
        </div>

        <div className="w-full lg:w-[50%] text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-[#fc8700] font-medium">
            SEA'S WORD
          </p>

          <div className="mt-[13px] flex items-center gap-[7px] text-[#fc8700]">
            <span className="inline-block h-[2px] w-[22px] bg-[#fc8700]" />
            <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#fc8700]" />
            <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#fc8700]" />
            <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#fc8700]" />
            <span className="inline-block h-[2px] w-[22px] bg-[#fc8700]" />
          </div>

          <h2 className="mt-[16px] font-montserrat font-bold text-4xl text-white">
            What Drives Me
          </h2>

          <div className="mt-[11px] font-montserrat font-bold text-5xl leading-none text-[#fc8700]/50">
            "
          </div>

          <p className="mt-[7px] max-w-[420px] font-montserrat text-sm italic leading-[20px] text-[#ededed]/85">
            Every match is a new story to write. Discipline, patience and belief
            carried me from Monaco's academy pitches to the biggest stadiums in the
            world. Football taught me that the hardest battles are won long before
            you step on the pitch — in the mind.
          </p>

          {/* <p className="mt-[31px] text-xl font-bold text-white">Emmanuel Adebayor</p> */}
          <p className="mt-[11px] text-sm text-white/50">Professional Footballer</p>
          <p className="mt-[19px] font-script text-5xl text-white/90">Emmanuel Adebayor</p>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [clicked, setClicked] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [heroOffsetY, setHeroOffsetY] = useState(0)
  const [atTop, setAtTop] = useState(true)
  const [heroIdx, setHeroIdx] = useState(0)
  const [heroPrev, setHeroPrev] = useState<number | null>(null)
  const [heroPhase, setHeroPhase] = useState<'in' | 'out'>('in')
  const heroIdxRef = useRef(0)
  const footerRef = useRef<HTMLElement | null>(null)
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    let rafId = 0
    const update = () => {
      const el = heroRef.current
      if (!el) return
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches
      if (!isDesktop) {
        setHeroOffsetY(0)
        return
      }
      const rect = el.getBoundingClientRect()
      const height = el.offsetHeight
      const progress = Math.min(Math.max(-rect.top / height, 0), 1)
      setHeroOffsetY(-progress * height * 0.3)
    }
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      setAtTop(window.scrollY <= 1)
      rafId = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowBackToTop(entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      const next = (heroIdxRef.current + 1) % PLAYER_IMAGES.length
      setHeroPrev(heroIdxRef.current)
      heroIdxRef.current = next
      setHeroIdx(next)
    }, 10000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    heroIdxRef.current = heroIdx
  }, [heroIdx])

  const firstHeroRender = useRef(true)
  useEffect(() => {
    if (firstHeroRender.current) {
      firstHeroRender.current = false
      return
    }
    setHeroPhase('out')
    let raf2 = 0
    const frame1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setHeroPhase('in'))
    })
    const timer = window.setTimeout(() => setHeroPrev(null), 1000)
    return () => {
      cancelAnimationFrame(frame1)
      cancelAnimationFrame(raf2)
      window.clearTimeout(timer)
    }
  }, [heroIdx])

  const handleNavClick = (item: { label: string; id: string }) => {
    setClicked(item.label)
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 w-full flex items-center justify-between px-[24px] py-[9px] bg-black/40 z-[9999999999] transition-all duration-300 ${
        atTop ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col leading-none items-center">
          <span className="font-montserrat text-[#6e6e6e] text-lg font-semibold leading-none">MARECHAL</span>
          <span className="font-caveat text-[#fc8700] text-lg leading-none -mt-1.5">SEA</span>
        </div>
        <ul className="hidden lg:flex gap-[22px] list-none m-0 p-0">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              onClick={() => handleNavClick(item)}
              className={`text-[#6e6e6e] hover:text-[#fc8700] transition-colors duration-[2000ms] cursor-pointer font-montserrat text-[12px] ${clicked === item.label ? 'line-through text-[#fc8700]' : ''}`}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-[#fc8700] hover:text-[#fc8700]"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && (
          <div className="fixed inset-0 top-[46px] z-[9999999998] flex flex-col items-center justify-start gap-5 bg-black/95 pt-16">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={`${item.label}-${index}`}
                type="button"
                onClick={() => {
                  handleNavClick(item)
                  setMenuOpen(false)
                }}
                className={`font-montserrat text-lg uppercase tracking-wide cursor-pointer transition-colors duration-200 ${
                  clicked === item.label ? 'line-through text-[#fc8700]' : 'text-[#6e6e6e] hover:text-[#fc8700]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="min-h-screen bg-[#000000] pt-[46px]">
        <section id="sea" className="scroll-mt-[46px] px-[8px] py-[24px]">
          <div
            className="mx-auto flex w-full items-center gap-3 max-w-[1400px] h-auto lg:h-[470px] max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:gap-2 max-lg:px-4 max-lg:py-4"
            onMouseLeave={() => setFeaturedIndex(0)}
          >
            <HighlightCard
              index={0}
              isFeatured={featuredIndex === 0}
              onHover={setFeaturedIndex}
              type="video"
            />
            {HIGHLIGHTS.map((item, i) => (
              <HighlightCard
                key={item.label}
                index={i + 1}
                isFeatured={featuredIndex === i + 1}
                onHover={setFeaturedIndex}
                type="photo"
                label={item.label}
                title={item.title}
                description={item.description}
                linkText={item.linkText}
                src={CARD_IMAGES[i]}
              />
            ))}
          </div>
        </section>

        <WelcomeSection />

        <section
          ref={heroRef}
          id="best-stats"
          className="scroll-mt-[46px] relative overflow-hidden bg-black min-h-screen px-8 lg:px-[6%]"
        >
          <div className="flex flex-col lg:flex-row items-stretch justify-between relative min-h-screen">
            <div className="relative w-full lg:w-[40%] min-h-[320px] sm:min-h-[400px]">
              <div
                className="absolute inset-0 z-10 will-change-transform [mask-image:linear-gradient(to_right,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_70%,transparent_100%)]"
                style={{ transform: `translateY(${heroOffsetY}px)` }}
              >
                {PLAYER_IMAGES.map((src, i) => {
                  const isCurrent = i === heroIdx
                  const isPrev = i === heroPrev
                  if (!isCurrent && !isPrev) {
                    return <img key={src} src={src} alt="" className="hidden" draggable={false} />
                  }
                  return (
                    <img
                      key={src}
                      src={src}
                      alt={isCurrent ? 'Emmanuel Adebayor' : ''}
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-contain object-left-bottom"
                      style={{
                        opacity: isCurrent && heroPhase === 'in' ? 1 : 0,
                        transform: isCurrent
                          ? heroPhase === 'in'
                            ? 'translateX(0)'
                            : 'translateX(-100%)'
                          : 'translateX(100%)',
                        transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease-out',
                        willChange: 'transform, opacity',
                        zIndex: isCurrent ? 2 : 1,
                      }}
                    />
                  )
                })}
              </div>

              <div className="absolute -left-8 lg:-left-[6%] bottom-[30%] z-20 flex flex-col gap-2">
                <div className="bg-white/10 pl-0 pr-4 py-1.5 w-fit">
                  <span className="text-white uppercase font-montserrat tracking-[0.2em] text-2xl lg:text-3xl">
                    Welcome to the
                  </span>
                </div>
                <div className="bg-[#fc8700]/85 pl-0 pr-4 py-1.5 w-fit">
                  <span className="text-white uppercase font-bold font-montserrat tracking-[0.2em] text-2xl lg:text-3xl">
                    E. ADEBAYOR WEBSITE
                  </span>
                </div>
              </div>
            </div>

            <div className="relative w-full lg:w-[60%] z-20 flex items-center p-6 lg:pl-0 lg:pr-8">
              <div className="flex w-full flex-col sm:flex-row gap-8 sm:gap-4 items-center">
                {CLUB_STATS.map((stat, i) => (
                  <ClubStatCard key={i} stat={stat} tall={i === 1} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CareerHighlight />

        <CareerStatsCarousel />

        <section id="socials" className="scroll-mt-[46px] min-h-screen flex flex-col items-center justify-center bg-[#000000] px-[30px] py-[80px]">
          <Newsletter />
        </section>

        <section id="partners" className="scroll-mt-[46px] min-h-screen bg-[#000000] flex flex-col items-center justify-center px-[30px] py-16">
          <h2 className="font-montserrat text-white text-sm uppercase tracking-[0.3em] text-center mb-12">
             BRANDS THAT{' '}
            <span className="font-bold">I WORK WITH&nbsp;</span>
          </h2>
          <div className="brand-frame grid grid-cols-5 w-full max-w-[650px] mx-auto">
            {BRANDS.map((brand) => (
              <BrandCell key={brand.name} brand={brand} />
            ))}
          </div>
        </section>
      </main>

      <footer
        ref={footerRef}
        className="bg-black border-t border-[#6e6e6e] text-[9px] font-montserrat text-[#6e6e6e]"
      >
        <div className="flex flex-wrap items-center justify-center gap-y-2 px-6 py-[14px] max-w-[1400px] mx-auto">
          <a href="#" className="flex-1 min-w-[140px] text-left transition-colors duration-300 hover:text-white no-underline">
            Private Policy
          </a>
          <p className="flex-1 min-w-[220px] text-center">
            © Emanuel Adebayor, All Rights Reserved
          </p>
          <a href="#" className="flex-1 min-w-[140px] text-right transition-colors duration-300 hover:text-white no-underline">
            POWERED BY CIODESIGN
          </a>
        </div>
      </footer>

      <button
        type="button"
        aria-label="Retour en haut de la page"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111] border border-[#6e6e6e] text-[#6e6e6e] cursor-pointer transition-[opacity,transform,background-color,border-color] duration-300 hover:bg-[#1a1a1a] hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          showBackToTop
            ? 'opacity-100 translate-y-0 visible pointer-events-auto'
            : 'opacity-0 translate-y-[10px] invisible pointer-events-none'
        }`}
      >
        <ChevronUp size={20} />
      </button>
    </>
  )
}

export default App