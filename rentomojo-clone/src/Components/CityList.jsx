import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CityList = ({ city, image, id }) => {
  return (
    <Box >
      <Box
        // border={"1px solid red"}
        borderRadius="10px"
        cursor={"pointer"}
        _hover={{ border: "1px solid red" }}
        height="160px"
        key={id}
      >
        <Box
          padding="17px"
          margin="10px 10px 0px 10px"
          borderRadius={"50%"}
          border="1px solid red"
        >
          <img src={image} alt="cityimage" width="80px" />
        </Box>
        <Text textAlign={"center"} marginBottom="5px">
          {city}
        </Text>
      </Box>
    </Box>
  );
};

export default CityList;
