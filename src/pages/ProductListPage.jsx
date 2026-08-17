import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";
import { useProductsSelectors } from "../hooks/useProductsSelectors";

export default function ProductListPage() {
  const { visibleProducts } = useProductsSelectors();

  return (
    <main className="product-list-page">
      <header className="product-list-page__header">
        <h1>Shop Products</h1>
        <p>{visibleProducts.length} products available</p>
      </header>

      <div className="product-list-page__layout">
        <ProductFilters />
        <ProductGrid />
      </div>
    </main>
  );
}
