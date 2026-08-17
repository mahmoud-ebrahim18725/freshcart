import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useProductsSelectors } from "../../hooks/useProductsSelectors";

export default function ProductCard({ product }) {
  const { addToCart } = useActions();
  const { isProductDisabled } = useProductsSelectors();
  const isDisabled = isProductDisabled(product);
  const handleAddToCart = () => {addToCart(product.id);};

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card__link">
        <div className="product-card__image-wrapper">
          <img
            className="product-card__image"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
      </Link>

      <div className="product-card__content">
        <h2 className="product-card__title">
          <Link to={`/products/${product.id}`} className="product-card__title-link">
            {product.title}
          </Link>
        </h2>
        <p className="product-card__category">{product.category}</p>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        <p className="product-card__stock">
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>
        <button
          className="product-card__button"
          type="button"
          onClick={handleAddToCart}
          disabled={isDisabled}
        >
          {isDisabled ? "Unavailable" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
