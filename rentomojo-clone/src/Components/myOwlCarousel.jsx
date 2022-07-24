import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const MyOwlCarousel = () => {
  const options = {
    arrows: true,
    loop: true,
    margin: 10,
    items: 4.5,
    // infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
  };
  const data = [
    {
      id: 1,
      productimage: "https://p.rmjo.in/productSquare/p2dm6gz4-500x500.jpg",
      title: "Oliver 3-Seater Fabric Sofa (Blue)",
      rent: "559",
    },
    {
      id: 2,
      productimage: "https://p.rmjo.in/productSquare/605n5qi4-500x500.jpg",
      title: "Smart LED TV - 32inches",
      rent: "849",
    },
    {
      id: 3,
      productimage: "https://p.rmjo.in/productSquare/caskfrhd-500x500.jpg",
      title: "Double Door Fridge (240 Litre)",
      rent: "1049",
    },
    {
      id: 4,
      productimage: "https://p.rmjo.in/productSquare/m00l8vn2-500x500.jpg",
      title: "Top Load Washing Machine",
      rent: "769",
    },
    {
      id: 5,
      productimage: "https://p.rmjo.in/productSquare/m9qgitpv-500x500.jpg",
      title: "Aurora Wooden Queen Bed (6x5)",
      rent: "539",
    },
    {
      id: 6,
      productimage: "https://p.rmjo.in/productSquare/xev0b5yi-500x500.jpg",
      title: "Induction Cooktop",
      rent: "149",
    },

    {
      id: 8,
      productimage: "https://p.rmjo.in/productSquare/bwskug14-500x500.jpg",
      title: "Single Door Fridge (190 Litre)",
      rent: "719",
    },
    {
      id: 9,
      productimage: "https://p.rmjo.in/productSquare/70rj36m0-500x500.jpg",
      title: "Poise Wooden Queen Bed (6x5)",
      rent: "549",
    },
  ];

  return (
    <Box
      padding={"20px 0px 20px 0px"}
      marginTop="5px"
      gap={"10px"}
      marginLeft="80px"
      // position={"relative"} position: sticky;
      /* position: -webkit-sticky; */
      z-index={1}
      // width="100%"
      // top: 0;
    >
      <OwlCarousel className="owl-theme" {...options}>
        {data.map((e) => {
          return (
            <Flex gap={"30px"} flexDirection="row">
              <Box
                className="item"
                key={e.id}
                border="1px solid grey"
                padding={"30px 10px 10px 10px"}
                bg={"white"}
              >
                <img src={e.productimage} alt="img" />
                <Box marginTop={"10px"}>
                  <Text textAlign={"left"}>{e.title}</Text>
                  <Flex
                    flexDirection={"row"}
                    justifyContent="space-between"
                    // gap="20px"
                    marginTop={"10px"}
                    marginBottom="10px"
                  >
                    <Box textAlign={"left"}>
                      <Text color={"grey"}>Rent</Text>
                      <Text>₹{e.rent}/mo</Text>
                    </Box>
                    <Button
                      border={"1px solid red"}
                      color="red"
                      _hover={{ bg: "red", color: "white" }}
                      borderRadius="1px"
                      marginTop={"5px"}
                    >
                      See more
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          );
        })}
      </OwlCarousel>
    </Box>
  );
};
export default MyOwlCarousel;
