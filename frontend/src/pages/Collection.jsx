import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 border-t">
      {/* Filter Section */}
      <div
        className={`min-w-[220px] bg-white border border-gray-300 rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl ${
          showFilter ? "h-auto" : "h-[500px] overflow-hidden"
        }`}
      >
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-lg font-semibold flex items-center cursor-pointer gap-2 text-gray-800"
        >
          FILTERS
          <img
            className={`h-4 transition-transform duration-200 ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt="Toggle Filters"
          />
        </p>
        {showFilter && (
          <>
            <div className="border-b border-gray-300 pb-3">
              <p className="mb-2 text-sm font-medium text-gray-700">
                CATEGORIES
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                {["Men", "Women", "Kids"].map((cat) => (
                  <label className="flex items-center gap-2" key={cat}>
                    <input
                      onChange={toggleCategory}
                      className="w-4 h-4"
                      type="checkbox"
                      value={cat}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-b border-gray-300 pb-3">
              <p className="mb-2 text-sm font-medium text-gray-700">TYPE</p>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                  <label className="flex items-center gap-2" key={type}>
                    <input
                      onChange={toggleSubCategory}
                      className="w-4 h-4"
                      type="checkbox"
                      value={type}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-lg sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 rounded-md text-sm px-3 py-1 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((item, index) => (
            <div className="group" key={item._id}>
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                className="transition-transform duration-300 transform group-hover:scale-105 shadow-md hover:shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
