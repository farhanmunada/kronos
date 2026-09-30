import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';

const links = [
  { index: '01', label: 'Systems', href: '#systems' },
  { index: '02', label: 'Projects', href: '#projects' },
  { index: '03', label: 'Specs', href: '#specs' },
  { index: '04', label: 'Inquire', href: '#inquire' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled ? 'border-b border-border bg-background/85 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="flex items-baseline gap-3" aria-label="Kronos Kinetic Dwellings — home">
          <span className="font-serif text-lg font-semibold tracking-[0.14em]">KRONOS</span>
          <span className="hidden text-[0.62rem] font-medium uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Kinetic Dwellings
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-foreground/70 transition-colors duration-300 hover:text-accent"
            >
              <span className="text-muted-foreground">{link.index}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex flex-col gap-[5px] p-2 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={cn('h-px w-6 bg-foreground transition-transform duration-300', menuOpen && 'translate-y-[6px] rotate-45')} />
          <span className={cn('h-px w-6 bg-foreground transition-opacity duration-300', menuOpen && 'opacity-0')} />
          <span className={cn('h-px w-6 bg-foreground transition-transform duration-300', menuOpen && '-translate-y-[6px] -rotate-45')} />
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        aria-label="Primary mobile"
        className={cn(
          'overflow-hidden border-t border-border bg-background transition-[max-height] duration-500 md:hidden',
          menuOpen ? 'max-h-80' : 'max-h-0 border-t-transparent',
        )}
      >
        <ul className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 border-b border-border py-4 text-sm uppercase tracking-[0.2em] text-foreground/80"
              >
                <span className="text-muted-foreground">{link.index}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
