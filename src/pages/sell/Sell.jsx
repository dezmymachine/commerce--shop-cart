// SellerPage.js
import React, { useState } from "react";
import "./sell.css";

const SellerPage = () => {
  // State to store product information
  const [product, setProduct] = useState({
    image: "",
    name: "",
    price: "",
    description: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any additional logic here, like sending the product data to a backend server
    // For now, we're just going to log the product data to the console
    console.log(product);
  };

  return (
    <div className="sell-container">
      <h2>Sell Your Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Image URL:
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Display the product information */}
      <div className="pending-info">
        <h2>Pending Approval</h2>
        <h3>Product Information</h3>
        <p>Product Image: {product.image}</p>
        <p>Product Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default SellerPage;
