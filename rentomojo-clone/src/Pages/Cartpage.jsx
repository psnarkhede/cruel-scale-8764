import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { Addons } from "../Components/Addons";
import { CartCard } from "../Components/CartCard";
import { CartHeader } from "../Components/CartHeader";
import { OrderSummary } from "../Components/OrderSummary";
// import "../Components/CartHeaders.css"
const Cartpage = () => {
  return (
    <Box /*border='2px solid #1A202C'*/ w="100%" bg="#EDF2F7">
      <Stack direction="column">
        <Flex direction="column">
          <Box>
            <CartHeader />
            {/* <Addons/> */}
            {/* <OrderSummary/> */}
          </Box>
          {/* <Box>
             <CartCard/>
           </Box> */}
        </Flex>
      </Stack>
      <Stack direction="row">
        <Flex direction="row" justifyContent="space-around">
          <Box>
            <Addons />
            <OrderSummary />
          </Box>
          <Box>
            <CartCard />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Cartpage;
