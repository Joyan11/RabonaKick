import { useCart } from "../../context/context";
import { ProductItem } from "./ProductItem";
import { productList } from "../../data/productdata";
import "../../css/products.css";
// import { useState } from "react";
export const Products = () => {
  const {
    priceSort,
    stockSort,
    fastDelivery,
    priceRange,
    sortByStock,
    sortByCost,
    sortByDelivery,
    sortBySliderRange,
    clearAllFilters,
  } = useCart();

  const filterByPrice = (productList, priceSort) => {
    if (priceSort === "lowtohigh") {
      return productList.sort((a, b) => a.price - b.price);
    } else {
      return productList.sort((a, b) => b.price - a.price);
    }
  };

  const filterByStock = (prevFilterItems, stockFlag) => {
    if (stockFlag === "instock") {
      return prevFilterItems.filter((item) => item.stock === "instock");
    } else {
      return prevFilterItems;
    }
  };

  const filterByDelivery = (prevItems, deliveryFlag) => {
    if (deliveryFlag === "available") {
      return prevItems.filter((item) => item.delivery === "fast");
    } else {
      return prevItems;
    }
  };

  const filterByPriceRange = (prevItems, priceRangeValue) => {
    const newArr = prevItems.filter((items) => {
      return items.price <= priceRangeValue;
    });

    return newArr;
  };

  // const toggleWishlist = (prevItems) => {
  //   const newArr = prevItems.map((items) => {
  //     if (items.inWishList === "no") {
  //       return { ...items, inWishList: "yes" };
  //     } else {
  //       return { ...items, inWishList: "no" };
  //     }
  //   });
  //   return newArr;
  // };
  // console.log(priceRange);
  // const filteredItems = filterByPrice(productList, priceSort);
  // const filteredItemsWithStock = filterByStock(filteredItems, stockSort);
  // const filterByFastDelivery = filterByDelivery(
  //   filteredItemsWithStock,
  //   fastDelivery
  // );
  // const productFilters = toggleWishlist(
  //   filterByPriceRange(filterByFastDelivery, priceRange)
  //);

  const productFilters = filterByPriceRange(
    filterByDelivery(
      filterByStock(filterByPrice(productList, priceSort), stockSort),
      fastDelivery
    ),
    priceRange
  );
  // console.log(productFilters);
  return (
    <div class="product-section">
      <div className="sidebar">
        <div className="filter">
          <div className="stock-filter">
            <input
              type="checkbox"
              name="stockfilter"
              id="stockfilter"
              checked={stockSort === "totalstock" ? false : true}
              onChange={(e) => sortByStock(e)}
            />
            <label htmlFor="stockfilter">Only In Stock</label>
          </div>
          <div className="delivery-filter">
            <input
              type="checkbox"
              name=""
              id="stockfilter"
              checked={fastDelivery === "allDeliveries" ? false : true}
              onChange={(e) => sortByDelivery(e)}
            />
            <label htmlFor="stockfilter">Fast Delivery</label>
          </div>
          <div className="price-slider">
            <p>Price range:</p>
            <input
              min="799"
              max="2099"
              type="range"
              name="slider"
              id="slider"
              value={priceRange}
              onChange={(e) => sortBySliderRange(e)}
            />
            <p> &#8377; {priceRange}</p>
          </div>
          <div className="clearFilter">
            <button class="btn btn-secondary" onClick={() => clearAllFilters()}>
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      <div className="products-page">
        <div class="price-filter">
          <label htmlFor="sortproducts">Sort by:</label>
          <select
            className="product-filter"
            name="productFilter"
            id="sortproducts"
            value={priceSort}
            onChange={(e) => sortByCost(e)}>
            <option value="lowtohigh">Price: Low to High</option>
            <option value="hightolow">Price: High to Low</option>
          </select>
        </div>
        <div className="product-container">
          <ProductItem productFilters={productFilters} />
        </div>
      </div>
    </div>
  );
};
