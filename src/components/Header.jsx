import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Women', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Luxe', href: '#' },
];

export function Header({ searchValue, onSearchChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-4">
          <a href="#" className="flex items-center gap-2 shrink-0" aria-label="Nykaa Fashion">
            <span className="text-2xl font-bold text-[#FF1774]">Products</span>
            <span className="text-2xl font-bold text-gray-900">Fashion</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#FF1774] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex-1 max-w-md mx-4 hidden sm:block">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="search"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF1774]/30 focus:border-[#FF1774]"
              />
            </label>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button type="button" className="p-2 text-gray-600 hover:text-[#FF1774] transition-colors" aria-label="Wishlist">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button type="button" className="p-2 text-gray-600 hover:text-[#FF1774] transition-colors" aria-label="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#FF1774]"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="block py-2 text-sm font-medium text-gray-700">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="search"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-md border border-gray-200 text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
