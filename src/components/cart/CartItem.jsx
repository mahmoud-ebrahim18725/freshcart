import { useActions } from "../../hooks/useActions";

export default function CartItem({ item }) {
  const { updateCartQuantity, removeFromCart } = useActions();

  return (
    <li className="cart-item">
      <img className="cart-item__image" src={item.thumbnail} alt={item.title} />
      <div className="cart-item__details">
        <h3 className="cart-item__title">{item.title}</h3>
        <p className="cart-item__price">${item.price.toFixed(2)} each</p>
        <p className="cart-item__subtotal">Subtotal: ${item.subtotal.toFixed(2)}</p>
      </div>
      <div className="cart-item__actions">
        <button type="button" onClick={() => updateCartQuantity(item.id, -1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => updateCartQuantity(item.id, 1)}>
          +
        </button>
        <button type="button" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </li>
  );
}
