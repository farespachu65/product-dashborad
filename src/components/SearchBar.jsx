export function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Search products</span>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-aletheia-muted pointer-events-none" aria-hidden>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 rounded-aletheia border border-zinc-200 bg-white/80 text-zinc-900 placeholder-aletheia-muted focus:outline-none focus:ring-2 focus:ring-classic-turquoise/30 focus:border-classic-turquoise transition-shadow text-sm"
        aria-label="Search products by name"
      />
    </label>
  );
}
