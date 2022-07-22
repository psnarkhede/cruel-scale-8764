import React from "react";
import Carousel from "../Components/Crousel";
import { Pagelinkhomepage } from "../Components/Pagelink-homepage";
import SliderHome from "../Components/SliderHome";
import { Box } from "@chakra-ui/react";
import MyOwlCarousel from "../Components/MyOwlCarousel";

const Homepage = () => {
  return (
    <Box>
      <Box width={"90%"} margin={"auto"}>
        <Carousel />
        <Pagelinkhomepage />
      </Box>
      <Box
        bg={"rgb(245,247,250)"}
        //  border="1px solid red"
        marginTop="-50px"
      >
        <SliderHome />
        <Box
        //  border={"1px solid red"}
        >
          <MyOwlCarousel />
        </Box>
      </Box>

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
