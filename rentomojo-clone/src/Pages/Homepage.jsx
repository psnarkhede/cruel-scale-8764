import React from "react";
import Carousel from "../Components/Crousel";
import { Pagelinkhomepage } from "../Components/Pagelink-homepage";
import SliderHome from "../Components/SliderHome";
import { Box } from "@chakra-ui/react";
import MyOwlCarousel from "../Components/myOwlCarousel";
import Reviews from "../Components/Reviews";
import Features from "../Components/Features";

const Homepage = () => {
  return (
    <Box>
      <Box width={"90%"} margin={"auto"}>
        <Carousel />
        <Pagelinkhomepage />
      </Box>
      <Box
        bg={"rgb(245,247,250)"}
        border="1px solid rgb(245,247,250)"
        marginTop="-50px"
      >
        <SliderHome />
        <MyOwlCarousel />
      </Box>
      <Box>
        <Features />
      </Box>
      <Reviews />

      {/* chat icon */}
      {/* <BsFillChatQuoteFill
        position={"static"}
        size={"60px"}
        left="0"
        bottom="0"
        // vertical-align="bottom"
        // display="inline-block"
      /> */}
    </Box>
  );
};

export default Homepage;
