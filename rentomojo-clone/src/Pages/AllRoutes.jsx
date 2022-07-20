import React from "react";
import { Routes, Route } from "react-router-dom";
import Cartpage from "./Cartpage";
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";
import Paymentspage from "./Paymentspage";
import Productpage from "./Productpage";
import Productspage from "./Productspage";
import Signuppage from "./Signuppage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />}></Route>

      <Route path="/products" element={<Productspage />}></Route>

      <Route path="/" element={<Productpage />}></Route>

      <Route path="/cart" element={<Cartpage />}></Route>

      <Route path="/login" element={<Loginpage />}></Route>

      <Route path="/payment" element={<Paymentspage />}></Route>

      <Route path="/signup" element={<Signuppage />}></Route>
    </Routes>
  );
};

export default AllRoutes;
