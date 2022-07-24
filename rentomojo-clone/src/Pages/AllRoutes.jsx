import React from "react";
import { Routes, Route } from "react-router-dom";
import Cartpage from "./Cartpage";
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";
import Paymentspage from "./Paymentspage";
import SingleProductPage from "./SingleProductPage";
import Productspage from "./Productspage";
import Settings from "./Settings";
import Signuppage from "./Signuppage";

import { Navbar } from "../Components/Navbar";

import Wishlistpage from "./Wishlistpage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route path="/products/:category" element={<Productspage />}></Route>

        <Route
          path="/product/:category/:id"
          element={<SingleProductPage />}
        ></Route>

        <Route path="/cart" element={<Cartpage />}></Route>

        <Route path="/login" element={<Loginpage />}></Route>

        <Route path="/payment" element={<Paymentspage />}></Route>

        <Route path="/settings" element={<Settings />}></Route>

        <Route path="/signup" element={<Signuppage />}></Route>

        {/* <Footer /> */}

        <Route path="/wishlist" element={<Wishlistpage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
