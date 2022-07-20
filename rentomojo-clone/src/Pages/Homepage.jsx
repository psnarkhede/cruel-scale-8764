import React from "react";
import Carousel from "../Components/Crousel";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { Box } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Box>
      <Box width={"90%"} border="1px solid red" margin={"auto"}>
        <Carousel />
        <Carousel />
      </Box>
      <BsFillChatQuoteFill
        postion="fixed"
        size={"60px"}
        right="0"
        left="0"
        // vertical-align="bottom"
        display="inline-block"
        bottom="0"
      />
    </Box>
  );
};

export default Homepage;
