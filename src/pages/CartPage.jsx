import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";

export default function CartPage() {
  return (
    <main className="cart-page">
      <header className="cart-page__header">
        <h1>Your Cart</h1>
      </header>
      <div className="cart-page__content">
        <CartList />
        <CartSummary />
      </div>
    </main>
  );
}
