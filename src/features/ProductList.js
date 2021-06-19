import React, { useState, useEffect } from "react";
import Product from "../components/Product";

export default function ProductList(allProductsData) {
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [idealFor, setIdealFor] = useState("");
  const [sizeOfProduct, setSizeOfProduct] = useState("");
  const [allProductList, setAllProductList] = useState([]);

  const handleReset = () => {
    setBrand("");
    setIdealFor("");
    setPrice("");
    setSizeOfProduct("");
  };

  useEffect(() => {
    const selectFilteredAllProducts = () => {
      const allProducts = allProductsData.allProductsData;

      const brandArray = allProducts.filter((product) =>
        product.brand.toString().includes(brand)
      );

      const genderArray = brandArray.filter((product) =>
        product.ideal_for.toLowerCase().includes(idealFor)
      );

      const finalData = genderArray.filter((product) =>
        product.size.toLowerCase().includes(sizeOfProduct)
      );

      if (price === "") {
        return finalData;
      } else if (price === "Lowest") {
        return finalData.sort(function (a, b) {
          return a.price - b.price;
        });
      } else if (price === "Highest") {
        return finalData.sort(function (a, b) {
          return b.price - a.price;
        });
      }
    };
    setAllProductList(selectFilteredAllProducts());
  }, [price, brand, idealFor, sizeOfProduct]);

  return (
    <div className="main">
      <div className="filter-container">
        <button onClick={handleReset}>Clear all</button>
        <div>
          <select
            className="sort-btns"
            onChange={(e) => setPrice(e.currentTarget.value)}
          >
            <option value="" key="1">
              Sort by Price
            </option>
            <option value="Lowest" key="2">
              Lowest - Highest
            </option>
            <option value="Highest" key="3">
              Highest - Lowest
            </option>
          </select>
        </div>
      </div>

      <div className="sort-container">
        <div className="single-sort-container">
          <select
            className="sort-btns"
            onChange={(e) => setBrand(e.currentTarget.value)}
          >
            <option value="" key="1">
              Brand
            </option>
            <option value="nike" key="2">
              Nike
            </option>
            <option value="Reebok" key="3">
              Reebok
            </option>
            <option value="noBrand" key="4">
              Nobrand
            </option>
            <option value="Adidas" key="5">
              Adidas
            </option>
          </select>
        </div>

        <div className="single-sort-container">
          <select
            className="sort-btns"
            onChange={(e) => setIdealFor(e.target.value)}
          >
            <option value="" key="1">
              Ideal for
            </option>
            <option value="man" key="2">
              Men
            </option>
            <option value="women" key="3">
              Women
            </option>
          </select>
        </div>

        {/* <div className="single-sort-container">
          <label htmlFor="m">M</label>
          <input id="m" type="checkbox"></input>
          <label htmlFor="s">S</label>
          <input id="s" type="checkbox"></input>
          <label htmlFor="l">L</label>
          <input id="l" type="checkbox"></input>
  </div>*/}
      </div>

      <div className="product-container">
        {allProductList.length > 0 &&
          allProductList.map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}
