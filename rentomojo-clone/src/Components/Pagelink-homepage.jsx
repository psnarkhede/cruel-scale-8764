import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiPackage } from "react-icons/bi";

export const Pagelinkhomepage = () => {
  return (
    <Flex
      marginTop={"70px"}
      // margin="auto"
      padding="5px"
      gap="20px"
      flexDirection={"row"}
      justifyContent="space-around"
      border={"1px solid red"}
    >
      <Box
        border={"1px solid grey"}
        borderRadius="10px"
        padding="30px 40px 15px 40px"
      >
        <BiPackage size={"60px"} />
        <Text>Package</Text>
      </Box>
      <Box
        border={"1px solid grey"}
        borderRadius="10px"
        padding="30px 40px 15px 40px"
      >
        <BiPackage size={"60px"} />
        <Text>Furniture</Text>
      </Box>
      <Box
        border={"1px solid grey"}
        borderRadius="10px"
        padding="30px 40px 15px 40px"
      >
        <BiPackage size={"60px"} />
        <Text>Appliances</Text>
      </Box>
      <Box
        border={"1px solid grey"}
        borderRadius="10px"
        padding="30px 40px 15px 40px"
      >
        <BiPackage size={"60px"} />
        <Text>Electronics</Text>
      </Box>
      <Box
        border={"1px solid grey"}
        borderRadius="10px"
        padding="30px 40px 15px 40px"
      >
        <BiPackage size={"60px"} />
        <Text>Bikes</Text>
      </Box>
      <Box
        border={"1px solid grey"}
        borderRadius="10px"
        padding="30px 40px 15px 40px"
      >
        <BiPackage size={"60px"} />
        <Text>Fitness</Text>
      </Box>
      <Box
        border={"1px solid grey"}
        borderRadius="10px"
        padding="30px 40px 15px 40px"
      >
        <BiPackage size={"60px"} />
        <Text margin={"0"}>Essentials</Text>
      </Box>
    </Flex>
  );
};
