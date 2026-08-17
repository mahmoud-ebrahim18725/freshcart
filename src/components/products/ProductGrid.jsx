import ProductCard from "./ProductCard";
import { useProductsSelectors } from "../../hooks/useProductsSelectors";

export default function ProductGrid() {
  const { visibleProducts } = useProductsSelectors();

  if (visibleProducts.length === 0) {
    return <p className="product-grid__empty">No products match the selected filters.</p>;
  }

  return (
    <section className="product-grid">
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
