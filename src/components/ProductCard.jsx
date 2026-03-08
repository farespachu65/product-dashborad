function formatCategory(cat) {
  if (!cat) return '';
  return cat.replace(/'s /g, "'s ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function ProductCard({ product, onClick }) {
  const { image, title, price, rating, category } = product;
  const rate = rating?.rate ?? 0;
  const count = rating?.count ?? 0;

  return (
    <article
      onClick={onClick}
      className="group cursor-pointer bg-aletheia-card rounded-aletheia-lg border border-zinc-200/80 shadow-card overflow-hidden flex flex-col h-full hover:shadow-card-hover hover:border-zinc-300/80 hover:scale-[1.02] transform transition-all duration-300"
    >
      <div className="relative aspect-[4/5] bg-aletheia-surfaceAlt flex items-center justify-center p-6 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 text-zinc-700 text-xs font-medium border border-zinc-200/80 backdrop-blur-sm">
          {formatCategory(category)}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-medium text-zinc-900 line-clamp-2 min-h-[2.5rem] text-sm leading-snug" title={title}>
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-1 text-amber-500/90" aria-label={`Rating: ${rate} out of 5`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= Math.round(rate) ? 'text-amber-500' : 'text-zinc-200'}
              aria-hidden
            >
              ★
            </span>
          ))}
          <span className="ml-1 text-xs text-aletheia-muted">({count})</span>
        </div>
        <p className="mt-auto pt-4 text-lg font-semibold text-classic-coral">
          ${typeof price === 'number' ? price.toFixed(2) : price}
        </p>
      </div>
    </article>
  );
}
