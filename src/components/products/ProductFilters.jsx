import { useActions } from "../../hooks/useActions";
import { useProductsSelectors } from "../../hooks/useProductsSelectors";

export default function ProductFilters() {
  const { setCategory, setSearch, setPriceRange, setSort } = useActions();
  const { categories, category, searchInput, sort, priceRange } = useProductsSelectors();

  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleSearchChange = (event) => setSearch(event.target.value);
  const handleSortChange = (event) => setSort(event.target.value);
  const handleMinPriceChange = (event) =>
    setPriceRange({ ...priceRange, min: Number(event.target.value) });
  const handleMaxPriceChange = (event) =>
    setPriceRange({ ...priceRange, max: Number(event.target.value) });

  return (
    <section className="product-filters">
      <div className="product-filters__field">
        <label htmlFor="product-search">Search</label>
        <input
          id="product-search"
          type="search"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search products"
        />
      </div>

      <div className="product-filters__field">
        <label htmlFor="product-category">Category</label>
        <select
          id="product-category"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="product-filters__field">
        <label htmlFor="product-sort">Sort by price</label>
        <select id="product-sort" value={sort} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="product-filters__range">
        <div className="product-filters__field">
          <label htmlFor="price-min">Min Price</label>
          <input
            id="price-min"
            type="number"
            min="0"
            value={priceRange.min}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="product-filters__field">
          <label htmlFor="price-max">Max Price</label>
          <input
            id="price-max"
            type="number"
            min="0"
            value={priceRange.max}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
    </section>
  );
}
