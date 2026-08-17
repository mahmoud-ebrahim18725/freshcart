import CartItem from "./CartItem";
import { useCartSelectors } from "../../hooks/useCartSelectors";

export default function CartList() {
  const { cartItems, isCartEmpty } = useCartSelectors();

  if (isCartEmpty) {
    return <p className="cart-list__empty">Your cart is empty.</p>;
  }

  return (
    <ul className="cart-list">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
