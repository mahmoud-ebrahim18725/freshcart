import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";
import { useActions } from "../hooks/useActions";
import { useProductsSelectors } from "../hooks/useProductsSelectors";

export default function ProductListPage() {
  const { visibleProducts, searchInput } = useProductsSelectors();
  const { setSearch } = useActions();

  const handleSearchChange = (event) => setSearch(event.target.value);

  return (
    <main className="product-list-page">
      <header className="product-list-page__header">
        <div className="product-list-page__heading">
          <h1>Shop Products</h1>
          <p>{visibleProducts.length} products available</p>
        </div>

        <div className="product-list-page__search">
          <label htmlFor="product-search">Search</label>
          <input
            id="product-search"
            type="search"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />
        </div>
      </header>

      <div className="product-list-page__layout">
        <ProductFilters />
        <ProductGrid />
      </div>
    </main>
  );
}
