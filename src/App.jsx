import { useState, useMemo, useEffect } from 'react';
import { useProducts } from './hooks/useProducts.js';
import { Sidebar } from './components/Sidebar.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { FilterSortBar } from './components/FilterSortBar.jsx';
import { StatsCards } from './components/StatsCards.jsx';
import { ProductGrid } from './components/ProductGrid.jsx';
import { LoadingSkeleton } from './components/LoadingSkeleton.jsx';
import { EmptyState, ErrorState } from './components/EmptyState.jsx';
import { HeroClassic } from './components/HeroClassic.jsx';
import { Footer } from './components/Footer.jsx';
import { ProductModal } from './components/ProductModal.jsx';

function filterAndSort(products, searchQuery, selectedCategory, sortOption) {
  let list = products;

  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
    );
  }

  if (selectedCategory) {
    list = list.filter((p) => p.category === selectedCategory);
  }

  if (sortOption) {
    const [field, order] = sortOption.split('-');
    list = [...list].sort((a, b) => {
      let aVal, bVal;
      if (field === 'price') {
        aVal = a.price;
        bVal = b.price;
      } else if (field === 'name') {
        aVal = (a.title || '').toLowerCase();
        bVal = (b.title || '').toLowerCase();
      } else if (field === 'rating') {
        aVal = a.rating?.rate ?? 0;
        bVal = b.rating?.rate ?? 0;
      } else {
        return 0;
      }
      if (aVal < bVal) return order === 'asc' ? -1 : 1;
      if (aVal > bVal) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

  return list;
}

function App() {
  const { products, loading, error, retry } = useProducts();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // apply dark class to root element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [darkMode]);

  const filteredProducts = useMemo(
    () => filterAndSort(products, searchQuery, selectedCategory, sortOption),
    [products, searchQuery, selectedCategory, sortOption]
  );

  return (
    <div className="min-h-screen bg-aletheia-surface dark:bg-aletheia-bg font-sans">
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem={activePage}
        onItemClick={(id) => {
          setActivePage(id);
          setSidebarOpen(false);
        }}
      />

      <div className="lg:pl-[240px] min-h-screen flex flex-col">
        {/* hero can now accept custom images via props */}
      <HeroClassic />
      <header className="sticky top-0 z-30 flex items-center gap-4 px-4 sm:px-6 h-16 glass border-b border-zinc-200/80">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-aletheia text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-classic-turquoise/30"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="font-semibold text-zinc-900 dark:text-white text-lg truncate">
              {activePage === 'products'
                ? 'Products Dashboards'
                : activePage.charAt(0).toUpperCase() + activePage.slice(1)}
            </h1>
          </div>
          <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <div className="flex items-center space-x-4">
            {/* loading spinner */}
            {loading && (
              <svg className="animate-spin w-6 h-6 text-classic-turquoise" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            )}
            {/* dark mode toggle */}
            <button
              onClick={() => setDarkMode((d) => !d)}
              className="p-2 rounded-aletheia hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-classic-turquoise/30"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293a8 8 0 01-10.586-10.586 8 8 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3a1 1 0 011-1v2a1 1 0 11-2 0V2a1 1 0 011-1zm0 14a1 1 0 011 1v-2a1 1 0 11-2 0v2a1 1 0 011 1zm7-7a1 1 0 011 1h-2a1 1 0 110-2h2a1 1 0 011 1zm-14 0a1 1 0 011 1H2a1 1 0 110-2h2a1 1 0 011 1zm11.657-5.657a1 1 0 011.414-1.414L17 5.586a1 1 0 01-1.414 1.414L14.657 4.343zm-11.314 11.314a1 1 0 011.414-1.414L5.586 17a1 1 0 01-1.414 1.414l-1.343-1.343zm11.314 1.414a1 1 0 00-1.414 1.414L14.343 17a1 1 0 001.414-1.414zM4.343 4.343a1 1 0 10-1.414 1.414L5.586 5.586a1 1 0 001.414-1.414L4.343 4.343z" />
                </svg>
              )}
            </button>
            {/* account icon */}
            <button type="button" className="p-2 rounded-aletheia hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-classic-turquoise/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.744 6.879 2.004M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            {/* wishlist icon */}
            <button type="button" className="p-2 rounded-aletheia hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-classic-turquoise/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 6a2 2 0 012-2h12a2 2 0 012 2v13a1 1 0 01-1 1h-5l-3 3-3-3H5a1 1 0 01-1-1V6z" />
              </svg>
            </button>
            {/* cart icon */}
            <button type="button" className="p-2 rounded-aletheia hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-classic-turquoise/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.1M7 13l1.35 2.7M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 animate-fade-in">
          {activePage === 'products' && (
            <>          
              {!loading && !error && products.length > 0 && (
                <div className="mb-8 animate-slide-up">
                  <StatsCards products={products} filteredCount={filteredProducts.length} />
                </div>
              )}

              <div className="mb-6">
                <FilterSortBar
                  category={selectedCategory}
                  sortOption={sortOption}
                  onCategoryChange={setSelectedCategory}
                  onSortChange={setSortOption}
                />
              </div>

              {loading && <LoadingSkeleton />}
              {error && <ErrorState message={error} onRetry={retry} />}
              {!loading && !error && filteredProducts.length === 0 && (
                <EmptyState
                  message="No products match your search."
                  subtitle="Try a different search term or category."
                />
              )}
              {!loading && !error && filteredProducts.length > 0 && (
                <section aria-label="Product grid">
                  <p className="text-sm text-aletheia-muted mb-4">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                  </p>
                  <ProductGrid products={filteredProducts} onProductClick={setSelectedProduct} />
                </section>
              )}
            </>
          )}

          {activePage === 'orders' && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Orders</h2>
              <p>Here you can view and manage customer orders (placeholder).</p>
            </section>
          )}

          {activePage === 'analytics' && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Analytics</h2>
              <p>Charts and reports will appear here (placeholder).</p>
            </section>
          )}

          {activePage === 'settings' && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Settings</h2>
              <p>Adjust your preferences and configuration here (placeholder).</p>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
