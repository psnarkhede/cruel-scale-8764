import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";

const SingleProduct = ({
  productimage,
  title,
  rent,
  deliverytime,
  deposit,
  id,
  category
}) => {
  return (
    <Link to={`/product/${category}/${id}`}>
      <Box>
        <Img src={productimage}></Img>
        <Text>{title}</Text>
        <Flex justifyContent="space-evenly">
          <Text>{rent}</Text>
          <Text>{deposit}</Text>
        </Flex>
      </Box>{" "}
    </Link>
  );
};

export default SingleProduct;
