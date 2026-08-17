import { useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useProductsSelectors } from "../hooks/useProductsSelectors";
import NotFoundPage from "./NotFoundPage";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const { productById, isProductDisabled } = useProductsSelectors();
  const { addToCart } = useActions();

  const product = productById(productId);

  if (!product) {
    return <NotFoundPage />;
  }

  const disabled = isProductDisabled(product);
  const imageUrl = product.images?.[0] || product.thumbnail;

  return (
    <main className="product-details-page">
      <section className="product-details" aria-labelledby="product-title">
        <div className="product-details__media">
          <img
            src={imageUrl}
            alt={product.title}
            className="product-details__image"
          />
        </div>

        <div className="product-details__info">
          <h1 id="product-title" className="product-details__title">
            {product.title}
          </h1>
          <p className="product-details__category">Category: {product.category}</p>
          <p className="product-details__description">{product.description}</p>

          <div className="product-details__summary">
            <p className="product-details__price">${product.price.toFixed(2)}</p>
            <p className="product-details__rating">⭐ {product.rating} / 5</p>
            <p className="product-details__stock">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </p>
          </div>

          <button
            type="button"
            className="product-details__button"
            onClick={() => addToCart(product.id)}
            disabled={disabled}
          >
            {disabled ? "Unavailable" : "Add to Cart"}
          </button>
        </div>
      </section>

      <section className="product-details__additional" aria-labelledby="additional-info-title">
        <h2 id="additional-info-title">Additional Information</h2>
        <dl className="product-details__details">
          <div className="product-details__detail">
            <dt>Brand</dt>
            <dd>{product.brand}</dd>
          </div>
          <div className="product-details__detail">
            <dt>SKU</dt>
            <dd>{product.sku}</dd>
          </div>
          <div className="product-details__detail">
            <dt>Weight</dt>
            <dd>{product.weight ? `${product.weight} g` : "N/A"}</dd>
          </div>
          <div className="product-details__detail">
            <dt>Warranty</dt>
            <dd>{product.warrantyInformation || "No warranty information available"}</dd>
          </div>
          <div className="product-details__detail">
            <dt>Shipping</dt>
            <dd>{product.shippingInformation || "No shipping information available"}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
