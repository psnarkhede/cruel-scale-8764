import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Button,
  color,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(Slider | (null > null));

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image: "https://s.rmjo.in/WP-Web.png?width=200&height=200",
    },
    {
      image: "https://s.rmjo.in/Web-HP.png",
    },
    {
      image: "https://s.rmjo.in/HP_renacle-Web.png",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"450px"}
      width={"full"}
      marginTop="20px"
      // overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position={"absolute"}
        left={"0px"}
        top={top}
        bg="white"
        color="grey"
        height={"70px"}
        zIndex={"1"}
        transform={"translate(0%, -50%)"}
        onClick={() => slider?.slickPrev()}
      >
        <RiArrowLeftSLine size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={"0px"}
        color="grey"
        bg="white"
        z-index="1"
        // bg="transparent"
        height={"70px"}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <RiArrowRightSLine size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"450px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            borderRadius="30px"
            // border={"1px solid red"}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              ></Stack>
            </Container>
            <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
              {card.text}
            </Text>
          </Box>
        ))}
      </Slider>
      <Box
        border="1px rgb(212,224,233) solid"
        borderRadius={"30px"}
        bg="rgb(212,224,233)"
        marginTop={"-70px"}
        height="100px"
        // marginTop={"30px"}
      >
        <Text marginTop={"60px"} textAlign="center">
          Safety precautions during COVID-19. We’re taking additional steps and
          precautionary measures to protect our community from COVID-19.",
          <Button
            className="a"
            bg={"ff00ff"}
            color="ff00ff"
            fontFamily="aerial"
            fontWeight={"3px"}
          >
            Know more <IoIosArrowDroprightCircle />
          </Button>
        </Text>
      </Box>
    </Box>
  );
}
