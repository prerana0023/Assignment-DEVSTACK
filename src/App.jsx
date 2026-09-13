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
            // Close (X) Icon
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            // Hamburger Icon
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

      {/* Mobile Dropdown Menu (Jokhon open true hobe tokhon ashbe) */}
      {open && (
        <div className="border-t border-line bg-surface px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-ink/80">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block rounded-lg px-3 py-2 hover:bg-ink/5"
                  onClick={() => setOpen(false)} // Link click korle menu bondho hoye jabe
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