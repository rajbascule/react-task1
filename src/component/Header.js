import React from "react";

export default function Header(props) {
  const {countCartItems} = props;
  return (
    <div className="header_container">
        <a href="#" className="header_logo">Simple shopping cart</a>
        <div className="header_link"> 
            <a href="#" className="cart_btn">Cart
              {countCartItems ? 
              <span className="badge">{countCartItems}</span> : ""  
            }
            </a>
            <a href="#">Sign In</a>
        </div>  
    </div>
  );
}
