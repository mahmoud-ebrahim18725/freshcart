import { useEffect } from "react";
import { getProducts } from "../services/productService";

export default function useLoadProducts(dispatch) {

  useEffect(() => {
    dispatch({ type: "CLEAR_ERROR" });
    dispatch({ type: "SET_UI_STATUS", payload: "loading" });
    getProducts()
      .then((products) => {
        dispatch({ type: "SET_PRODUCTS", payload: products });
        dispatch({ type: "SET_UI_STATUS", payload: "success" });
      })
      .catch((err) => {
        dispatch({ type: "SET_ERROR", payload: err.message });
      });
  }, [dispatch]);
}
