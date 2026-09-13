import { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

// ---------------------------------------------------------------------
// Data: loaded from the JSON file at the project root, not hardcoded.
// ---------------------------------------------------------------------
import technologiesData from '../technologies.json'

// ---------------------------------------------------------------------
// Local icon assets (src/picture) — imported once and looked up by the
// filename stored against each technology in technologies.json.
// ---------------------------------------------------------------------
import logo from './picture/logo-text.png'
import banner from './picture/banner-stack.png'
import reactIcon from './picture/React.png'
import vueIcon from './picture/Vue.js.png'
import svelteIcon from './picture/Svelte.png'
import nextIcon from './picture/Next.js.png'
import nodeIcon from './picture/Node.js.png'
import expressIcon from './picture/Express.png'
import djangoIcon from './picture/Django.png'
import springIcon from './picture/Spring.png'
import postgresIcon from './picture/PostgresSQL.png'
import redisIcon from './picture/Redis.png'
import javascriptIcon from './picture/JavaScript.png'
import typescriptIcon from './picture/TypeScript.png'
import javaIcon from './picture/Java.png'
import tailwindIcon from './picture/Tailwind CSS.png'
import dockerIcon from './picture/Docker.png'

const ICONS = {
  'React.png': reactIcon,
  'Vue.js.png': vueIcon,
  'Svelte.png': svelteIcon,
  'Next.js.png': nextIcon,
  'Node.js.png': nodeIcon,
  'Express.png': expressIcon,
  'Django.png': djangoIcon,
  'Spring.png': springIcon,
  'PostgresSQL.png': postgresIcon,
  'Redis.png': redisIcon,
  'JavaScript.png': javascriptIcon,
  'TypeScript.png': typescriptIcon,
  'Java.png': javaIcon,
  'Tailwind CSS.png': tailwindIcon,
  'Docker.png': dockerIcon,
}

const CATEGORY_STYLES = {
  Frontend: 'bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200',
  Backend: 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200',
  Database: 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200',
  Language: 'bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200',
  Styling: 'bg-cyan-50 text-cyan-700 ring-1 ring-inset ring-cyan-200',
  DevOps: 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200',
  Tools: 'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200',
}
function categoryClass(category) {
  return CATEGORY_STYLES[category] || 'bg-gray-50 text-gray-700 ring-1 ring-inset ring-gray-200'
}

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

/* ===================================================================
   Navbar
=================================================================== */
function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2 shrink-0">
      <img src={logo} alt="Dev Stack logo" className="h-8 w-8 rounded-lg" />
      <span className="text-lg font-extrabold text-gradient-brand">Dev Stack</span>
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Mobile: Hamburger Icon (Left side) */}
        <button
          type="button"
          className="md:hidden -ml-2 rounded-lg p-2 text-ink hover:bg-ink/5"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Desktop: Brand (Left) */}
        <div className="hidden md:block">
          <BrandMark />
        </div>

        {/* Mobile: Brand (Center) */}
        <div className="md:hidden">
          <BrandMark />
        </div>

        {/* Desktop: Nav Links (Center) */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-ink">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Auth Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#signin" className="hidden text-sm font-semibold text-ink/70 hover:text-ink sm:inline">
            Sign In
          </a>
          <a href="#signup" className="btn-primary !px-4 !py-2 text-xs sm:text-sm">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="border-t border-line bg-surface px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-ink/80">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block rounded-lg px-3 py-2 hover:bg-ink/5"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-line mt-2">
              <a 
                href="#signin" 
                className="block rounded-lg px-3 py-2 hover:bg-ink/5"
                onClick={() => setOpen(false)}
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

/* ===================================================================
   Hero / Banner
=================================================================== */
function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-muted">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#technologies" className="btn-primary">
              Explore Technologies
            </a>
            <a href="#about" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
        <img src={banner} alt="Illustration of stacked technology blocks" className="mx-auto w-full max-w-sm lg:mx-0" />
      </div>
    </section>
  )
}

/* ===================================================================
   Loader
=================================================================== */
function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-muted">
      <span
        className="h-9 w-9 animate-spin rounded-full border-2 border-ink/10"
        style={{ borderTopColor: '#EC4899' }}
        role="status"
        aria-label="Loading technologies"
      />
      <p className="text-sm font-medium">Loading technologies…</p>
    </div>
  )
}

/* ===================================================================
   Technology Card
=================================================================== */
function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="#F59E0B" className="shrink-0">
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85z" />
    </svg>
  )
}

function TechnologyCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech

  const cardStyle = isAdded
  ? 'border-pink-500 bg-pink-50 shadow-lg shadow-pink-200'
  : 'border-line bg-surface shadow-card hover:shadow-xl hover:-translate-y-1 hover:border-pink-300'

  return (
    <article className={`flex flex-col rounded-2xl border p-5 transition-all duration-300 ${cardStyle}`}>
      <div className="flex items-start justify-between">
        <img src={ICONS[icon]} alt="" aria-hidden="true" className="h-10 w-10 rounded-lg object-contain" />
        {badge && (
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${isAdded ? 'bg-pink-100 text-pink-700' : 'bg-ink/5 text-ink/70'}`}>
            {badge}
          </span>
        )}
      </div>

      <h3 className={`mt-3 text-base font-bold ${isAdded ? 'text-pink-700' : 'text-ink'}`}>{name}</h3>
      <p className={`mt-1.5 text-sm leading-relaxed line-clamp-2 ${isAdded ? 'text-pink-600/80' : 'text-muted'}`}>{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className={`rounded-full px-2.5 py-1 font-semibold ${categoryClass(category)}`}>
          {category}
        </span>
        <span className={`${isAdded ? 'text-pink-600/80' : 'text-ink/60'}`}>{difficulty}</span>
        <span className={`ml-auto flex items-center gap-1 font-semibold ${isAdded ? 'text-pink-700' : 'text-ink'}`}>
          <Star /> {rating.toFixed(1)}
        </span>
      </div>

      <button 
        type="button" 
        onClick={() => onAdd(tech)} 
        disabled={isAdded} 
        className={`mt-4 w-full rounded-xl py-2.5 text-sm font-semibold transition-colors ${
          isAdded 
            ? 'bg-pink-500 text-white cursor-default' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

/* ===================================================================
   Technology Grid
=================================================================== */
function TechnologyGrid({ stackIds, onAdd }) {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(technologiesData)
      setLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard key={tech.id} tech={tech} isAdded={stackIds.has(tech.id)} onAdd={onAdd} />
      ))}
    </div>
  )
}

/* ===================================================================
   Your Stack sidebar
=================================================================== */
function RemoveIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
    </svg>
  )
}

function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <aside className="rounded-2xl border border-line bg-surface p-5 shadow-card lg:sticky lg:top-24">
      <div className="flex items-baseline justify-between">
        <h3 className="text-base font-bold text-ink">Your Stack</h3>
        <span className="text-xs font-medium text-muted">
          {count} {count === 1 ? 'Technology' : 'Technologies'} Selected
        </span>
      </div>

      {count === 0 ? (
        <p className="mt-6 text-sm text-muted">
          Your stack is empty. Add technologies to get started.
        </p>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-2">
            {stack.map((tech) => (
              <li key={tech.id} className="flex items-center gap-3 rounded-xl border border-line px-3 py-2.5">
                <img src={ICONS[tech.icon]} alt="" aria-hidden="true" className="h-7 w-7 shrink-0 rounded-md object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{tech.name}</p>
                  <span className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryClass(tech.category)}`}>
                    {tech.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name} from stack`}
                  className="shrink-0 rounded-full p-1.5 text-ink/40 hover:bg-ink/5 hover:text-ink"
                >
                  <RemoveIcon />
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-xl border border-rose-200 bg-rose-50 py-2.5 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-100"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

/* ===================================================================
   Footer
=================================================================== */
const LINK_GROUPS = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com', path: 'M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.3 1.1 2.9.9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2z' },
  { name: 'Twitter', href: 'https://twitter.com', path: 'M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4 4 0 0 0 1.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.7 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z' },
  { name: 'LinkedIn', href: 'https://linkedin.com', path: 'M6.9 8.4H3.6V20h3.3V8.4zM5.3 3.3a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9zM20.4 20h-3.3v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20H9.5V8.4h3.2v1.6h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V20z' },
]

function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <img src={logo} alt="Dev Stack logo" className="h-8 w-8 rounded-lg" />
              <span className="text-lg font-extrabold text-gradient-brand">Dev Stack</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Curated tools and comparisons for developers building their next stack.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink/60 transition-colors hover:text-ink"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold text-ink">{group.title}</h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ===================================================================
   App — owns the stack state and the toast notifications
=================================================================== */
export default function App() {
  const [stack, setStack] = useState([])

  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack])

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(id) {
    const removed = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((t) => t.id !== id))
    if (removed) toast.info(`${removed.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div id="top" className="min-h-screen bg-surface">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-6 border-b border-dashed border-line pb-6">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Explore the <span className="text-gradient-brand">Technologies</span>
          </h2>
          <p className="mt-1 text-sm text-muted">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <TechnologyGrid stackIds={stackIds} onAdd={handleAdd} />
          <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      </section>

      <Footer />

      <ToastContainer position="bottom-right" autoClose={2500} newestOnTop theme="light" />
    </div>
  )
}