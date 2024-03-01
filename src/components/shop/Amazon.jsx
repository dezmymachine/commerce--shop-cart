import React from "react";
import all_product from "../../assets/img/all_product";
import "./amazon.css";

import Cards from "../card/Card";

const Amazon = ({ handleClick }) => {
  return (
    <div className="super">
      <section className="shop-flex">
        {all_product.map((item) => (
          <Cards item={item} key={item.id} handleClick={handleClick} />
        ))}
      </section>
    </div>
  );
};

export default Amazon;
