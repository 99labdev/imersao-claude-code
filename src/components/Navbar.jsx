import { useState } from 'react'
import PixelChar from './PixelChar.jsx'

const LINKS = [
  { href: '#method', label: 'Método' },
  { href: '#speaker', label: 'Quem lidera' },
  { href: '#checkout', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f4]/80 dark:bg-[#1c1c19]/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-outline-variant/10">
      <div className="flex items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto justify-between gap-4">
        {/* Logo (left side) */}
        <a
          href="#hero"
          className="font-serif text-base sm:text-xl md:text-2xl font-bold text-[#1c1c19] dark:text-[#fcf9f4] hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center gap-2 font-headline">
            <PixelChar className="scale-[0.8] origin-left mr-2" />
            <span>IMERSÃO Claude Code</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-label text-xs lg:text-sm uppercase tracking-wider text-[#1c1c19] dark:text-[#fcf9f4] hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="md:hidden text-[#1c1c19] dark:text-[#fcf9f4]"
        >
          <span className="material-symbols-outlined text-3xl">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden border-t border-outline-variant/10 bg-[#fcf9f4]/95 dark:bg-[#1c1c19]/95 backdrop-blur-md">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 font-label text-sm uppercase tracking-wider text-[#1c1c19] dark:text-[#fcf9f4] hover:bg-primary/10 hover:text-primary transition-colors border-b border-outline-variant/10 last:border-b-0"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
