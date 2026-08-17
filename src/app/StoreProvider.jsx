import { useReducer } from "react";
import { initializeState } from "./initializeState";
import { reducer } from "./reducer";
import { StoreContext } from "./StoreContext";
import  useLoadProducts  from "../hooks/useLoadProducts";
import { usePersistCart } from "../hooks/usePersistCart";

export default function StoreProvider({children}){
    const [state, dispatch] = useReducer(reducer, undefined , initializeState);
    useLoadProducts(dispatch);
    usePersistCart(state.cart);

    return(
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}