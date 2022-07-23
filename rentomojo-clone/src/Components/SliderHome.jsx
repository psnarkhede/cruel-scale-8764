import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const SliderHome = () => {
  return (
    <Box
      //  border={"1px solid red"}
      width={"85%"}
      margin="auto"
    >
      <Box textAlign={"start"} marginTop="100px">
        <Flex flexDirection={"row"} justifyContent="space-between">
          <Box>
            <Text
              fontFamily={"Muli, sans-serif"}
              fontSize="30px"
              fontWeight={"bold"}
            >
              You'll love to
            </Text>
            <Text
              fontFamily={"Muli, sans-serif"}
              fontSize="30px"
              color={"grey"}
            >
              take these home
            </Text>
            <Box width="50px" border="1px solid red"></Box>
          </Box>
          <Box marginTop={"50px"}>
            <Flex>
              <AiOutlineLeftCircle size="50" color="grey" />
              <AiOutlineRightCircle
                size="50"
                color="black"
                fontVariant={"red"}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SliderHome;
