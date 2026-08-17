import {useStore} from "./useStore";

export function useCartSelectors() {
    const {state} = useStore();
    const cart = state.cart;
    const isCartEmpty = cart.length === 0;
    const cartItems = cart.reduce((sum, item) => {
        const product = state.products.find(
            (product) => product.id === item.productId,
        );
        if (product) {
            return [
                ...sum,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    stock: product.stock,
                    quantity: item.quantity,
                    subtotal: product.price * item.quantity,
                },
            ];
        }
        return sum;
    }, []);
    const totalQuantity = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0,
    );
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.subtotal,
        0,
    );
    return {
        cart,
        isCartEmpty,
        cartItems,
        totalQuantity,
        totalPrice,
    };
}   