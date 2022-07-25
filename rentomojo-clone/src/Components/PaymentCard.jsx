import React, { useRef, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BsExclamationCircleFill } from "react-icons/bs";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Netbanking } from "./Netbanking";
export const PaymentCard = () => {
  // const [size,setSize] =useState('')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="red" w="98%" h="60px" onClick={onOpen}>
        <Flex gap="140px" alignItems="center">
          <Text> ₹3234</Text>
          <Text fontSize="14px">Pay Now</Text>
        </Flex>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Choose payment mode</DrawerHeader>
          <DrawerBody>
            {/* main box start */}
            <Box
              //   border='1px solid teal'
              w="100%"
              h="550px"
              borderRadius="30px"
              bg="#E2E8F0"
            >
              {/* first flex start  */}
              <Flex
                direction="column"
                border="1px solid teal"
                w="100%"
                h="550px"
                borderRadius="30px"
                justifyContent="space-around"
                alignItems="center"
              >
                {/* first box start total amount and checkbox */}
                <Box w="100%" h="100px" px="20px" py="10px">
                  <Flex direction="column">
                    <Text>Total Amount Payable</Text>
                    <Heading fontSize="19px" fontWeight="medium">
                      ₹2974
                    </Heading>
                    {/* checkbox and term start */}
                    <Box>
                      <Flex marginTop="15px">
                        <Checkbox colorScheme="teal" defaultChecked />
                        <Text color="#A0AEC0" marginLeft="10px">
                          I hereby agree to RentoMojo
                        </Text>
                        <Text marginLeft="5px" color="#4FD1C5">
                          terms and conditions.{" "}
                        </Text>
                      </Flex>
                    </Box>
                    {/* checkbox and term end */}
                  </Flex>
                </Box>
                {/* first box end total amount and checkbox */}
                {/* start second box netbanking */}
                <Box
                  w="100%"
                  h="150px"
                  //  px='5px'
                  //  py='5px'
                >
                  <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                    //  py='10px'
                    //  px='8px'
                  >
                    <Text marginLeft="-100px">
                      Net Banking, Debit Card & Credit Card
                    </Text>
                    {/* credit card debit card netbanking box start */}
                    <Box
                      // border='1px solid teal'
                      w="80%"
                      h="100px"
                      py="10px"
                      px="10px"
                      borderRadius="10px"
                      boxShadow="xs"
                      p=""
                      rounded="md"
                      bg="white"
                    >
                      <Flex alignItems="center" justifyContent="space-around">
                        {/* <Button>
                          <Image
                            cursor="pointer"
                            src="https://www.rentomojo.com/public/images/cart/payment/razorpay.png"
                            w="20%"
                            h="60px"
                          />
                        </Button> */}
                        <Button fontSize="13px" cursor="pointer">
                          {/* Credit Card/Debit Card/
                          <Text cursor="pointer" fontSize="13px">
                            Netbanking
                          </Text> */}
                          <Netbanking />
                        </Button>
                        <ChevronRightIcon fontSize="18px" cursor="pointer" />
                      </Flex>
                      <Divider />
                      <Flex marginTop="3px">
                        <BsExclamationCircleFill
                          color="red"
                          fontSize="13p"
                          py="px"
                        />
                        <Text fontSize="14px" marginLeft="3px">
                          CRED:{" "}
                        </Text>
                        <Text fontSize="13px">
                          Up to Rs.100/cashback.T&c Apply
                        </Text>
                      </Flex>
                    </Box>
                    {/* credit card debit card netbanking box end */}
                  </Flex>
                  {/* {"zzzzzzzzzzz"} */}
                </Box>
                {/* end second box netbanking */}

                {/* third box wallet start */}
                <Box
                  w="100%"
                  h="250px"
                  //  px='5px'
                  //  py='5px'
                >
                  <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                    //  py='10px'
                    //  px='8px'
                  >
                    <Text marginLeft="-295px">Wallets</Text>
                    {/* credit card debit card netbanking box start */}
                    {/* amazon pay start */}
                    <Box
                      w="80%"
                      h="70px"
                      py="5px"
                      px="5px"
                      borderRadius="10px"
                      boxShadow="xs"
                      p=""
                      rounded="md"
                      bg="white"
                    >
                      <Flex alignItems="center" justifyContent="space-around">
                        <Image
                          cursor="pointer"
                          src="https://www.rentomojo.com/public/images/cart/payment/amazon-pay.png"
                          w="20%"
                          h="60px"
                        />
                        <Text cursor="pointer" fontSize="15px">
                          Pay Via Amazon Pay
                        </Text>
                        <ChevronRightIcon fontSize="18px" cursor="pointer" />
                      </Flex>
                    </Box>
                    {/* amazon pay start */}
                    <Box
                      // border='1px solid teal'
                      w="80%"
                      h="100px"
                      py="10px"
                      px="10px"
                      borderRadius="10px"
                      boxShadow="xs"
                      p=""
                      rounded="md"
                      bg="white"
                    >
                      <Flex alignItems="center" justifyContent="space-around">
                        <Image
                          cursor="pointer"
                          src="https://www.rentomojo.com/public/images/cart/payment/mobikwik.png"
                          w="20%"
                          h="60px"
                        />
                        <Text cursor="pointer" fontSize="15px">
                          Pay via Mobikik
                        </Text>
                        <ChevronRightIcon fontSize="18px" cursor="pointer" />
                      </Flex>
                      <Divider />
                      <Flex marginTop="3px">
                        <BsExclamationCircleFill
                          color="red"
                          fontSize="13p"
                          py="px"
                        />
                        <Text fontSize="12px" marginLeft="3px">
                          Use KWIK20 to get additional 20% cashback (Max ₹75)
                        </Text>
                      </Flex>
                    </Box>
                    {/* wallet */}
                  </Flex>
                </Box>
                {/* third box wallet send */}
                {/* fourth box start */}

                {/* fourth box start */}
              </Flex>
              {/* first flex end */}
            </Box>
            {/* main box end */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
