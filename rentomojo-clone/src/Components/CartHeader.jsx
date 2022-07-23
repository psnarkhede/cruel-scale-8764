import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { useState } from "react";
import LocationMenu from "./LocationMenu";

export const CartHeader = () => {
  const [isCheck] = useState(true);
  return (
    <Box
      // border='1px solid teal'
      position="sticky"
      z-index="1"
      top="0px"
      //  bg='white'
      w="100%"
      h="75px"
      boxShadow="md"
      p="0 5"
      rounded=""
      bg="white"
    >
      {/* <Stack direction='row'> */}
      <Flex direction="row" justifyContent="space-around">
        <Box
          //    border='1px solid red'
          w="20%"
          h="70px"
          p="0 20px"
        >
          <Flex>
            <Image
              src="https://play-lh.googleusercontent.com/5S7hL_DxU_Ml7kGBs0M5pzKOoNXpFZELahoT-rbwKmeREwoBI_L8_ikrz_w5Me7K6A"
              alt="rentomoj logo"
              // boxSize="80px"
              padding={"5px"}
              width={"60px"}
              h="68px"
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
        {/* select city option  */}

        <Box border="1px solid red">
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
                  border={isCheck ? "2px solid #4FD1C5" : "2px solid #718096"}
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
      {/* </Stack> */}
    </Box>
  );
};
