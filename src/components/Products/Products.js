import { useMainContext } from "../../context/context";
import { ProductCard } from "./Productcard";
import "../../css/products.css";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { PuffLoader } from "../Loader";
import useProductData from "../../hooks/useProductData/useProductData";
export const Products = () => {
  useProductData();
  const {
    products,
    loader,
    priceSort,
    stockSort,
    fastDelivery,
    priceRange,
    teamFilter,
    sortByCost,
  } = useMainContext();

  const [searchText, setSearchText] = useState("");

  const filterByPrice = (productList, priceSort) => {
    if (priceSort === "lowtohigh") {
      return productList.sort((a, b) => a.price - b.price);
    } else {
      return productList.sort((a, b) => b.price - a.price);
    }
  };

  const filterByStock = (prevItems, stockFlag) => {
    if (stockFlag === "instock") {
      return prevItems.filter((item) => item.stock === "instock");
    } else {
      return prevItems;
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

  const filterByTeam = (prevItems, teamName) => {
    if (teamName === "allteams") {
      return prevItems;
    } else {
      return prevItems.filter((items) => {
        return items.club === teamName;
      });
    }
  };

  const filterBySearch = (prevItems) => {
    const searchData = prevItems.filter((items) => {
      return items.name
        .toLowerCase()
        .trim()
        .includes(searchText.toLowerCase().trim());
    });
    return searchData;
  };

  // Funtion comosition of filters
  const productFilters = filterBySearch(
    filterByTeam(
      filterByPriceRange(
        filterByDelivery(
          filterByStock(filterByPrice(products, priceSort), stockSort),
          fastDelivery
        ),
        priceRange
      ),
      teamFilter
    )
  );

  return (
    <div className="product-section">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="products-page">
        <div className="product-page-filter">
          <div className="search">
            <input
              className="input"
              type="text"
              name="text"
              id="text"
              placeholder="Search for products"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <div className="price-filter">
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
        </div>
        <div className="product-container">
          {loader && <PuffLoader />}
          <ProductCard productFilters={productFilters} />
        </div>
      </div>
    </div>
  );
};
