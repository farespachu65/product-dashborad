export function ProductModal({ product, onClose }) {
  if (!product) return null;
  const { image, title, description, price, rating } = product;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
      <div className="bg-aletheia-card rounded-aletheia-lg max-w-lg w-full mx-4 p-6 relative">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded text-zinc-500 hover:text-zinc-900">
          &times;
        </button>
        <div className="flex flex-col sm:flex-row gap-6">
          <img
            src={image}
            alt={title}
            className="w-full sm:w-1/2 object-contain rounded"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-aletheia-muted mb-4">{description}</p>
            <p className="text-lg font-bold text-classic-coral mb-4">
              ${typeof price === 'number' ? price.toFixed(2) : price}
            </p>
            {rating && (
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= Math.round(rating.rate) ? 'text-amber-500' : 'text-zinc-200'}
                  >
                    ★
                  </span>
                ))}
                <span className="text-xs text-aletheia-muted">({rating.count})</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
