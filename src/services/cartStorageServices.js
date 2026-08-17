export function loadCart() {
    const cart = localStorage.getItem("cart");
    if (cart === null) {
        return [];
    }
    try {
        return JSON.parse(cart);
    } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        return [];
    }
}

export function saveCart(cart) {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
        console.error("Error saving cart to localStorage:", error);
    }
}

