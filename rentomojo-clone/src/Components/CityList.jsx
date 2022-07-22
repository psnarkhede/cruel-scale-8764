import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CityList = ({ city, image, id }) => {
  return (
    <Box key={id} width="140px">
      <Box
        border={"1px solid red"}
        borderRadius="10px"
        // transition="border 1px solid red 0.5s
        // margin="5px"
        cursor={"pointer"}
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
