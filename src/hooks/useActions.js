import { useStore } from "./useStore";

export function useActions() {
  const { dispatch } = useStore();

  const addToCart = (id) => dispatch({ type: "ADD_TO_CART", payload: id });
  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const updateCartQuantity = (id, amount) =>
    dispatch({ type: "UPDATE_CART_QUANTITY", payload: { id, amount } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const setProducts = (products) =>
    dispatch({ type: "SET_PRODUCTS", payload: products });
  const submitOrder = () => dispatch({ type: "SUBMIT_ORDER" });
  const setCategory = (category) =>
    dispatch({ type: "SET_CATEGORY_FILTER", payload: category });
  const setSearch = (value) =>
    dispatch({ type: "SET_SEARCH_FILTER", payload: value });
  const setPriceRange = (priceRange) => {
    dispatch({ type: "SET_PRICE_RANGE", payload: priceRange });
  };
  const setSort = (sortType) =>
    dispatch({ type: "SET_SORT", payload: sortType });
  const setUiStatus = (value) =>
    dispatch({ type: "SET_UI_STATUS", payload: value });
  const setError = (message) =>
    dispatch({ type: "SET_ERROR", payload: message });
  const clearError = () => dispatch({ type: "CLEAR_ERROR" });

  return {
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    setProducts,
    submitOrder,
    setCategory,
    setSearch,
    setPriceRange,
    setSort,
    setUiStatus,
    setError,
    clearError,
  };
}
