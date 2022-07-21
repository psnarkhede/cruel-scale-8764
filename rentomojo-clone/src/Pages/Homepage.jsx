import React from "react";
import Carousel from "../Components/Crousel";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { BiPackage } from "react-icons/bi";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Pagelinkhomepage } from "../Components/Pagelink-homepage";

const Homepage = () => {
  return (
    <Box>
      <Box width={"90%"} margin={"auto"}>
        <Carousel />
        <Pagelinkhomepage />
      </Box>

      <BsFillChatQuoteFill
        position={"fixed"}
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
