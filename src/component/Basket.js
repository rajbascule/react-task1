import React from 'react';

export default function Basket(props) {
  const { onAdd, onRemove, cardItems } = props;
  const itemsPrice = cardItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const discountPrice = itemsPrice > 1000 ? 200 : 0;
  const totalPrice = (itemsPrice + taxPrice + shippingPrice) - discountPrice;
  return (
    <aside className="basket_box d-flex flex-column">
      <h1>Basket</h1>
        {cardItems.length === 0 && <div>Cart is empty</div>}
        {cardItems.map((x) => {
          return (
            <div key={x.id} className="d-flex align-items-center justify-content-between mt-20">
              <div className="product_name">{x.name}</div>
              <div className="card_btn d-flex align-items-center">
                <button onClick={() => onRemove(x)} className="remove_btn me-10">-</button>
                <button onClick={() => onAdd(x)} className="add_btn">+</button>
              </div>
              <div>
                {x.qty} x ${x.price.toFixed(2)}
              </div>
            </div>
          );
        })}
        {cardItems.length !== 0 && (
          <div className="price_box">
            <div className=" d-flex align-items-center justify-content-between mt-10">
              <div>Items Price</div>
              <div>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className=" d-flex align-items-center justify-content-between mt-10">
              <div>Tax Price</div>
              <div>${taxPrice.toFixed(2)}</div>
            </div>
            <div className=" d-flex align-items-center justify-content-between mt-10">
              <div>Shopping Price</div>
              <div>${shippingPrice.toFixed(2)}</div>
            </div>
            <div className=" d-flex align-items-center justify-content-between mt-10">
              <div>Discount Price</div>
              <div>${discountPrice.toFixed(2)}</div>
            </div>
            <br />
            <hr/>
            <div className=" d-flex align-items-center justify-content-between mt-10">
              <div>Total Price</div>
              <div>${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        )
        }
    </aside>
  );
}
