import React from "react";

function Product(product) {
  return (
    <div className="product">
      <img src={product.product.img_url} alt={product.product.name} />
      <span>{product.product.brand}</span>
      <h3>{product.product.product_name}</h3>
      <h4>Rs: {product.product.price}</h4>
    </div>
  );
}

export default Product;
