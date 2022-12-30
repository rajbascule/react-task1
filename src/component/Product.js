import React from "react";

export default function Product(props) {
  const {item, products,onAdd,onRemove} = props;
  console.log(item);
  return (
    <div className="card">
        <img src={products.img} alt={products.img} />
        <div className="d-flex align-items-center justify-content-between mt-20">
            <span className="product_name">{products.name}</span>
            <span>$ {products.price}</span>
        </div>
        <div className="card_btn mt-20">
            {item ? 
                <div className="d-flex align-items-center justify-content-between">
                    <button onClick={() => onRemove(item)} className="remove_btn">-</button>
                    <span>{item.qty}</span>
                    <button onClick={()=> onAdd(item)} className="add_btn">+</button>
                </div> : 
                <button onClick={() => onAdd(products)} className="add_cart_btn">Add Cart</button>
            }
        </div>
    </div>
  );
}
