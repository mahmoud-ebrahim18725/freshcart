import {useStore} from "./useStore";

export function useProductsSelectors() {
    const {state} = useStore();
    const products = state.products;
    const productById = (id) => products.find((product) => product.id === Number(id));
    const productsInStock = products.filter((product) => product.stock > 0);
    const productsOutOfStock = products.filter((product) => product.stock === 0);
    const productsCount = products.length;
    const isProductDisabled = (product) => {
        const cartItem = state.cart.find((item) => item.productId === product.id);
        if (product.stock === 0) return true;
        if (!cartItem) return false;
        return cartItem.quantity >= product.stock;
    }
    const filteredByCategory =
        state.filters.category.toLowerCase() === "all"
            ? products
            : products.filter(
                (product) =>
                    product.category.toLowerCase() ===
                    state.filters.category.toLowerCase(),
            );
    const filteredBySearch = filteredByCategory.filter((product) =>
        product.title
            .toLowerCase()
            .includes(state.filters.searchInput.toLowerCase()),
    );

    const filteredByPriceRange = filteredBySearch.filter(
        (product) =>
            product.price >= state.filters.priceRange.min &&
            product.price <= state.filters.priceRange.max,
    );

    const sortedProducts =
        state.filters.sort === "default"
            ? filteredByPriceRange
            : state.filters.sort === "asc"
                ? [...filteredByPriceRange].sort((a, b) => a.price - b.price)
                : [...filteredByPriceRange].sort((a, b) => b.price - a.price);
    
    const visibleProducts = sortedProducts;

    const searchInput = state.filters.searchInput;
    const category = state.filters.category;
    const sort = state.filters.sort;
    const priceRange = state.filters.priceRange;
    const categories = ["All", ...new Set(products.map((product) => product.category))];
    return {
        products,
        productById,
        productsInStock,
        productsOutOfStock,
        productsCount,
        isProductDisabled,
        visibleProducts,
        searchInput,
        category,
        sort,
        priceRange,
        categories,
    }
}