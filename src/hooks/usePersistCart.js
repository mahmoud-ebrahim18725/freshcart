import {useEffect} from "react";
import {saveCart} from "../services/cartStorageServices";

export function usePersistCart(cart) {

    useEffect(() => {
        saveCart(cart);
    }, [cart]);
}