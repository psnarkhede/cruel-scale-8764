import React from "react";
import Carousel from "../Components/Crousel";
import { Pagelinkhomepage } from "../Components/Pagelink-homepage";
import SliderHome from "../Components/SliderHome";
import MyOwlCarousel from "../Components/MyOwlCarousel";
import { Box } from "@chakra-ui/react";
import Features from "../Components/Features";
import Reviews from "../Components/Reviews";
import Footer from "./Footer";

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
      <Box>
        <Reviews />
      </Box>
      <Box>
        <Footer />
      </Box>
      {/* <Footersection1 /> */}

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
