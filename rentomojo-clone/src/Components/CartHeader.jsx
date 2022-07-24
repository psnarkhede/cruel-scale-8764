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

<<<<<<< HEAD
        <Box 
        // border="1px solid red"
        >
          <Flex>
            <LocationMenu />
          </Flex>
        </Box>
=======
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
                    src="https://play-lh.googleusercontent.com/5S7hL_DxU_Ml7kGBs0M5pzKOoNXpFZELahoT-rbwKmeREwoBI_L8_ikrz_w5Me7K6A"
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
>>>>>>> 441a9a602035747143d25660e66d0b2c7026e512

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
