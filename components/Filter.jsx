import { useState } from "react";

const Filter = ({ categories, onFilterChange, showTitle = true }) => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    organic: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFilters = {
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      category: "",
      priceRange: "",
      organic: false,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const [showFilter, setShowFilter] = useState(false)

  const handleFilter = () => {
    setShowFilter(!showFilter)
  }

  return (
    <div className="filter-section ">
      {showFilter && (
        <>
          {showTitle && <h3 className="filter-title">Filter Products</h3>}

          <div className="filter-group">
            <label className="filter-label">Category</label>
            <select
              name="category"
              className="filter-select"
              value={filters.category}
              onChange={handleChange}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Price Range</label>
            <select
              name="priceRange"
              className="filter-select"
              value={filters.priceRange}
              onChange={handleChange}
            >
              <option value="">All Prices</option>
              <option value="0-10">₹0 - ₹10</option>
              <option value="10-20">₹10 - ₹20</option>
              <option value="20-50">₹20 - ₹50</option>
              <option value="50+">₹50+</option>
            </select>
          </div>

          <div className="filter-group flex">
            <input
              type="checkbox"
              name="organic"
              className="filter-checkbox"
              checked={filters.organic}
              onChange={handleChange}
            />
            <label className="filter-label">Organic Only</label>
          </div>

          <button
            onClick={handleReset}
            className="w-full mt-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded hover:bg-green-50 transition-colors"
          >
            Reset Filters
          </button>
        </>
      )}
    </div>
  );
};

export default Filter;
