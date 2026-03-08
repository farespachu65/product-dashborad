export function EmptyState({ message = 'No products match your search.', subtitle }) {
  return (
    <div className="text-center py-20 px-6 rounded-aletheia-lg bg-aletheia-card border border-zinc-200/80 shadow-card">
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-aletheia-lg bg-aletheia-surfaceAlt text-2xl mb-4" aria-hidden>
        🔍
      </span>
      <p className="text-base font-medium text-zinc-700">{message}</p>
      {subtitle && <p className="mt-2 text-sm text-aletheia-muted">{subtitle}</p>}
    </div>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <div className="text-center py-20 px-6 rounded-aletheia-lg bg-aletheia-card border border-aletheia-danger/20 shadow-card">
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-aletheia-lg bg-aletheia-dangerSoft text-2xl mb-4" aria-hidden>
        ⚠️
      </span>
      <p className="text-base font-medium text-aletheia-danger">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 px-5 py-2.5 bg-zinc-900 text-white rounded-aletheia font-medium hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-aletheia-accent/30 focus:ring-offset-2 transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
}
