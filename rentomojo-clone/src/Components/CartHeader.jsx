import React from "react";
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { useState } from "react";
import LocationMenu from "./LocationMenu";
import { Link } from "react-router-dom";
import "./CartHeader.css";

export const CartHeader = () => {
  const [isCheck] = useState(true);
  return (
    <Box
      className="cart_navbar"
      margin="auto"
      width="100%"
      bg={useColorModeValue("white")}
      // border="1px solid red"
      // margin="auto"
    >
      <Flex
        bg={useColorModeValue("white")}
        // bg={"transparent"}

        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        width={"90%"}
        margin="auto"
        gap="10px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        flexDirection="row"
        justifyContent={"space-between"}
        // border={"1px solid red"}
        padding="2px 5px 2px 2px"
      >
        <Box width={"95%"} margin="auto">
          {/* <Stack direction='row'> */}
          <Flex direction="row" justifyContent="space-between">
            <Link to="/">
              <Box cursor="pointer" marginleft={"0px"}>
                <Flex>
                  <Image
                    src="data:image/png;base64,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"
                    alt="rentomoj logo"
                    // boxSize="80px"
                    padding={"5px"}
                    width={"60px"}
                    h="60px"
                  />
                  <Text
                    fontSize={25}
                    textAlign="center"
                    as=""
                    marginLeft="0px"
                    p="10px 5px"
                    fontWeight="bold"
                    color="rgb(109,109,109)"
                    cursor="pointer"
                  >
                    rentomojo
                  </Text>
                </Flex>
              </Box>
            </Link>
            {/* select city option  */}

            <Box>
              <Flex>
                <LocationMenu />
              </Flex>
            </Box>

            {/* delivey option checked */}

            <Box
              //    border='1px solid red'
              w="45%"
              h="70px"
            >
              <Flex direction="row" justifyContent="space-around">
                <Box
                  //  border='1px solid red'
                  w="33%"
                  h="70px"
                >
                  <Flex justifyContent="space-around" p="18px 4px">
                    <Text
                      as={MdCheckCircle}
                      color={isCheck ? "teal.300" : "gray.500"}
                      fontSize="25px"
                    >
                      {" "}
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize="18px"
                      color={isCheck ? "teal.300" : "gray.500"}
                    >
                      Checkout
                    </Text>
                    <Box
                      border={
                        isCheck ? "2px solid #4FD1C5" : "2px solid #718096"
                      }
                      w="50px"
                      h="1px"
                      marginTop="14px"
                    ></Box>
                  </Flex>
                </Box>
                <Box
                  // border='1px solid red'
                  w="33%"
                  h="70px"
                >
                  <Flex justifyContent="space-around" p="18px 4px">
                    <Text as={MdCheckCircle} color="gray.500" fontSize="25px">
                      {" "}
                    </Text>
                    <Text textAlign="center" fontSize="18px">
                      Verification
                    </Text>
                    <Box
                      border="2px solid #718096"
                      w="50px"
                      h="1px"
                      marginTop="14px"
                    ></Box>
                  </Flex>
                </Box>
                <Box
                  // border='1px solid red'
                  w="33%"
                  h="70px"
                >
                  <Flex justifyContent="space-around" p="18px 4px">
                    <Text as={MdCheckCircle} color="gray.500" fontSize="25px">
                      {" "}
                    </Text>
                    <Text textAlign="center" fontSize="18px">
                      Delivery
                    </Text>
                    <Box
                      border="2px solid #718096"
                      w="50px"
                      h="1px"
                      marginTop="14px"
                    ></Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        {/* </Stack> */}
      </Flex>
    </Box>
  );
};
