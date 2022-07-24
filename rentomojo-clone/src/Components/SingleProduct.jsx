import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Img,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const SingleProduct = ({
  productimage,
  title,
  rent,
  deliverytime,
  deposit,
  id,
  category,
}) => {
  const [like, setLike] = useState(true);

  return (
    <Link to={`/product/${category}/${id}`}>
      <Box
        height="420px"
        width="290px"
        border="1px solid grey"
        borderRadius="3px"
      >
        <Box
          // marginLeft="40%"
          marginLeft="250px"
          bg="white"
          marginTop="12px"
          width="20px"
          height="20px"
          zIndex="1"
          position="absolute"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            onClick={() => setLike(!like)}
            fontSize="22px"
            as={like ? FcLike : AiOutlineHeart}
          />
        </Box>
        <Img src={productimage} height="240px"></Img>
        <Text fontFamily="Muli,sans-serif" fontSize="15px" marginTop="3px">
          {title}
        </Text>
        <Divider
          width="85%"
          marginTop="10px"
          paddingTop="12px"
          //paddingBottom="-5px"
          margin="auto"
        />
        <Box marginTop="16px">
          <Flex justifyContent="space-evenly">
            <Text fontFamily="Muli,sans-serif" fontSize="15px" color="grey">
              {" "}
              ₹{rent}/mo
            </Text>

            <Text fontFamily="Muli,sans-serif" fontSize="15px" color="grey">
              5 days
            </Text>
          </Flex>
        </Box>
        <Button
          marginTop="34px"
          color="blue"
          borderRadius="25px"
          bg="white"
          fontSize="13px"
          border="1px solid blue"
          width="200px"
        >
          Quick View
        </Button>
      </Box>{" "}
    </Link>
  );
};

export default SingleProduct;
