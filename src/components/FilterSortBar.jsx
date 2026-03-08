const CATEGORIES = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const SORT_OPTIONS = [
  { value: '', label: 'Sort by' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A–Z' },
  { value: 'rating-desc', label: 'Rating: High to Low' },
];

function formatCategoryLabel(cat) {
  return cat.replace(/'s /g, "'s ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function FilterSortBar({ category, sortOption, onCategoryChange, onSortChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {[
          { value: '', label: 'All' },
          ...CATEGORIES.map((cat) => ({ value: cat, label: formatCategoryLabel(cat) })),
        ].map(({ value, label }) => (
          <button
            key={value || 'all'}
            type="button"
            onClick={() => onCategoryChange(value)}
            className={`
              px-4 py-2 rounded-aletheia text-sm font-medium transition-colors duration-200
              ${category === value
                ? 'bg-classic-turquoise text-white shadow-sm'
                : 'bg-aletheia-card border border-zinc-200 text-aletheia-muted hover:border-classic-turquoise/40 hover:text-zinc-700'
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <select
          id="sort-select"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 rounded-aletheia border border-zinc-200 bg-aletheia-card text-zinc-700 focus:outline-none focus:ring-2 focus:ring-classic-turquoise/30 focus:border-classic-turquoise text-sm font-medium"
          aria-label="Sort products"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value || 'default'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
