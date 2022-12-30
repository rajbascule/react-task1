import React from "react";
import Product from "./Product";

export default function Main(props) {
  const {cardItems, products,onAdd,onRemove} = props;
  return (
    <div className="main_box">
        <h1>Products</h1>
        <div className="product_row d-flex">
            {products.map((x)=>{
              return(
                  <div className="product_col" key={x.id}>
                      <Product products={x} onAdd={onAdd} onRemove={onRemove} item={cardItems.find(y=> y.id === x.id)} ></Product>
                  </div>
              )
            })}
        </div>
    </div>
  );
}
