import { useActions } from "../../hooks/useActions";
import { useCartSelectors } from "../../hooks/useCartSelectors";

export default function CartSummary() {
  const { totalQuantity, totalPrice, isCartEmpty } = useCartSelectors();
  const { clearCart, submitOrder } = useActions();

  if (isCartEmpty) {
    return <div className="cart-summary">Your cart has no items yet.</div>;
  }

  return (
    <aside className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total items: {totalQuantity}</p>
      <p>Total price: ${totalPrice.toFixed(2)}</p>
      <div className="cart-summary__actions">
        <button type="button" onClick={clearCart} className="cart-summary__button">
          Clear Cart
        </button>
        <button type="button" onClick={submitOrder} className="cart-summary__button cart-summary__button--primary">
          Checkout
        </button>
      </div>
    </aside>
  );
}
