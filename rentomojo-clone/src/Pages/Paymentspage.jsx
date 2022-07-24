import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { PaymentCard } from "../Components/PaymentCard";

const Paymentspage = () => {
  return <Box>
   <Navbar />
      <PaymentCard/>
        <Footer />
  </Box>;

};

export default Paymentspage;
