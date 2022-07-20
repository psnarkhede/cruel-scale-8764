import React from "react";
import Carousel from "../Components/Crousel";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { Box } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Box>
      <Carousel />
      <BsFillChatQuoteFill
        // marginTop="20px"
        size={"60px"}
        right="side"
        top="0"
        bottom="0"
      />
    </Box>
  );
};

export default Homepage;
