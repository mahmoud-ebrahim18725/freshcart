import { initialState } from "./initialState";
import { loadCart } from "../services/cartStorageServices";

export function initializeState() {
  const cart = loadCart();
  return {
    ...initialState,
    cart,
  };
}