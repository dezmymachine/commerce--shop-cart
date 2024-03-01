import React, { useState } from "react";
import { useEffect } from "react";
import "./cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.new_price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    // <article>
    //   <div className="cart-wrapper">
    //     {cart?.map((item) => (
    //       <div className="cart_box" key={item.id}>
    //         <div className="cart_img">
    //           <img src={item.img} />
    //           <p>{item.name}</p>
    //         </div>
    //         <div className="btn-group">
    //           <button
    //             className="add-minus"
    //             onClick={() => handleChange(item, +1)}
    //           >
    //             {" "}
    //             +{" "}
    //           </button>
    //           <button>{item.amount}</button>
    //           <button
    //             className="add-minus"
    //             onClick={() => handleChange(item, -1)}
    //           >
    //             {" "}
    //             -{" "}
    //           </button>
    //         </div>
    //         <div>
    //           <span>{item.price}</span>
    //           <button onClick={() => handleRemove(item.id)}>Remove</button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="total">
    //     <span>Total Price of your Cart</span>
    //     <span>GH&#8373; - {price}</span>
    //   </div>
    // </article>
    <article>
      <div className="cart-wrapper">
        <div className="cart-card-container">
          {cart?.map((item) => (
            <div className="cart-card" key={item.id}>
              <div className="cart-img">
                <img src={item.img} />
                <p className="item-name">{item.name}</p>
              </div>
              <div className="cart-info">
                <div className="btn-group">
                  <button
                    className="add-minus"
                    onClick={() => handleChange(item, +1)}
                  >
                    +
                  </button>
                  <button>{item.amount}</button>
                  <button
                    className="add-minus"
                    onClick={() => handleChange(item, -1)}
                  >
                    -
                  </button>
                </div>
                <div>
                  <span>{item.price}</span>
                  <button
                    className="delete-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <span>Total Price of your Cart: </span>
          <span>GH₵ {price}</span>
          <button className="checkout">Proceed to checkout</button>
        </div>
      </div>
    </article>
  );
};

export default Cart;
