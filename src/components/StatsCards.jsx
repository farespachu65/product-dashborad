function StatCard({ label, value, sub }) {
  return (
    <div className="bg-aletheia-card rounded-aletheia-lg border border-zinc-200/80 shadow-card p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-aletheia-muted">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-zinc-900 tracking-tight">{value}</p>
      {sub != null && <p className="mt-1 text-xs text-aletheia-muted">{sub}</p>}
    </div>
  );
}

export function StatsCards({ products, filteredCount }) {
  const total = products.length;
  const categories = [...new Set(products.map((p) => p.category))].length;
  const avgPrice = total
    ? (products.reduce((sum, p) => sum + (p.price || 0), 0) / total).toFixed(2)
    : '0.00';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard label="Total products" value={total} />
      <StatCard label="Categories" value={categories} />
      <StatCard
        label="Average price"
        value={`$${avgPrice}`}
        sub={filteredCount !== total ? `Showing ${filteredCount} of ${total}` : null}
      />
    </div>
  );
}
