import { ProductCard } from './ProductCard.jsx';

export function ProductGrid({ products, onProductClick }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 list-none p-0 m-0">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard
            product={product}
            onClick={() => onProductClick && onProductClick(product)}
          />
        </li>
      ))}
    </ul>
  );
}
