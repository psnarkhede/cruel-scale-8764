import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Navbar from "../src/Components/Navbar";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const [cartPage] =useState(true)
  return cartPage ? (
    <Box>
       <AllRoutes/>
    </Box>
  ):(
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
