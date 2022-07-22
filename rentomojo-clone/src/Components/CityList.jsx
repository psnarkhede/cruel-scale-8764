import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CityList = ({ city, image, id }) => {
  return (
    <Box key={id}>
      <Box border={"1px solid red"} margin="auto">
        <Box padding="10px">
          <img src={image} alt="cityimage" bor />
        </Box>
        <Text padding="8px" textAlign={"center"}>
          {city}
        </Text>
      </Box>
    </Box>
  );
};

export default CityList;
