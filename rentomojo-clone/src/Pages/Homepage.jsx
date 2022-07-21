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
      <Box
        bg={"rgb(245,247,250)"}
        border="1px solid red"
        height={"300px"}
        marginTop="-20px"
      ></Box>

      <BsFillChatQuoteFill
        position={"static"}
        size={"60px"}
        left="0"
        bottom="0"
        // vertical-align="bottom"
        // display="inline-block"
      />
    </Box>
  );
};

export default Homepage;
