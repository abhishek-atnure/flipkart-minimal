import React from "react";

import ProductList from "./features/ProductList";
import allProductsData from "./productData";

export default function App() {
  return (
    <div className="App">
      <nav>
        <span>Flipkart-Minimal</span>
      </nav>
      <div className="filter-container"></div>
      <ProductList allProductsData={allProductsData} />
    </div>
  );
}
