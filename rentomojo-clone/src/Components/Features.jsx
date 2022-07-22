import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Features = () => {
  return (
    <Box width="90%" border={"1px solid red"} margin="auto">
      <Flex>
        <Box>
          <Text
            fontFamily={"Muli, sans-serif"}
            fontSize="30px"
            fontWeight={"bold"}
          >
            There's more
          </Text>
          <Text
            fontFamily={"Muli, sans-serif"}
            fontSize="30px"
            color={"grey"}
            textAlign="start"
          >
            to renting
          </Text>
          <Box width="50px"></Box>
        </Box>
      </Flex>
    </Box>
  );
};
export default Features;
