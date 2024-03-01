// import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "./components/navbar/Navbar";
// import Amazon from "./components/shop/Amazon";
// import Cart from "./components/cart/Cart";
// import NavLinks from "./components/navlinks/NavLinks";

import Render from "./components/render/Render";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import NavLinks from "./components/navlinks/NavLinks";
import SellerPage from "./pages/sell/Sell";

// const App = () => {
//   const [show, setShow] = useState(true);
//   const [cart, setCart] = useState([]);
//   const [warning, setWarning] = useState(false);

//   const handleClick = (item) => {
//     let isPresent = false;
//     cart.forEach((product) => {
//       if (item.id === product.id) isPresent = true;
//     });
//     if (isPresent) {
//       setWarning(true);
//       setTimeout(() => {
//         setWarning(false);
//       }, 2000);
//       return;
//     }
//     setCart([...cart, item]);
//   };

//   const handleChange = (item, d) => {
//     let ind = -1;
//     cart.forEach((data, index) => {
//       if (data.id === item.id) ind = index;
//     });
//     const tempArr = cart;
//     tempArr[ind].amount += d;

//     if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
//     setCart([...tempArr]);
//   };

//   return (
//     <React.Fragment>
//       <Navbar size={cart.length} setShow={setShow} />
//       {show ? (
//         <Amazon handleClick={handleClick} />
//       ) : (
//         <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
//       )}
//       {warning && (
//         <div className="warning">Item is already added to your cart</div>
//       )}
//       <NavLinks />
//     </React.Fragment>
//   );
// };

// export default App;

const App = () => {
  return (
    <>
      <Router>
        {/* <Render /> */}
        <NavLinks />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/render" element={<Render />} />
          <Route path="/sell" element={<SellerPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
