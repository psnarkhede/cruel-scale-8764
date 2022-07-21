import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

const SingleProduct = ({
  productimage,
  title,
  rent,
  deliverytime,
  deposit,
}) => {
  return (
    <Box>
      <Img src={productimage}></Img>
      <Text>{title}</Text>
      <Flex justifyContent="space-evenly">
        <Text>{rent}</Text>
        <Text>{deposit}</Text>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
