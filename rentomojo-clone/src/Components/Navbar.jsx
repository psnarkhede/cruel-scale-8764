import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import LocationMenu from "./LocationMenu";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./navbar.css";

import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function WithSubnavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loginText, setLoginText] = useState(0);

  const loginNum = (e) => {
    setLoginText(e.target.vector);
  };

  const handleLogin = () => {
    if (loginText.length === 10) {
    }
  };
  console.log(loginText);

  return (
    <Box className="navbar" margin="auto" width="100%">
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
        <Link to="/">
          <Box cursor="pointer" marginleft={"0px"}>
            {/* <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}> */}
            <img
              src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/34e7cf10-932f-495d-aa1f-d76577d50be4.png"
              // src="https://cdn.tradetracker.net/in/campaign_image_rectangle/31144.png"
              alt=""
              width="300px"
              overflow="hidden"
            />
          </Box>
        </Link>
        <Box>
          <LocationMenu />
        </Box>
        <Box>
          <Input
            placeholder="Search for products"
            // border="1px solid red"
            type="search"
            width={"700px"}
            padding="20px"
            margin={"auto"}
            autoComplete="on"
            borderRadius={"10px"}
          />
        </Box>
        <Link to="/cart">
          <Flex alignItems={"center"} gap="10px" cursor="pointer">
            <BsCart2 size={"20px"} />
            <Text>Cart</Text>
          </Flex>
        </Link>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/* <Link to="/login"> */}
          <Button
            onClick={onOpen}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"red"}
            href={"#"}
            border="1px solid red"
            borderRadius={"8px"}
            _hover={{
              bg: "white",
              color: "red",
            }}
          >
            LOGIN/SIGNUP
          </Button>
          {/* </Link> */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              minWidth={"800px"}
              height={"570px"}
              borderRadius="20px"
              margin="auto"
            >
              <Flex>
                <Box
                  boxSizing={"boxSizing"}
                  width={"95%"}
                  height={"480px"}
                  marginTop="90px"
                >
                  <img
                    src="https://img.freepik.com/premium-vector/pink-armchair-with-cats-semi-flat-rgb-color-vector-illustration-chair-with-pets-house-comfortable-couch-living-room-cozy-home-furniture-isolated-cartoon-object-white-background_106317-8068.jpg?size=626&ext=jpg"
                    alt="login-State"
                    width="800px"
                  />
                </Box>
                <Box minWidth={"5%"} borderRightRadius="20px" bg={"#f5f7fa"}>
                  <Flex
                    margin="60px 30px 10px 40px"
                    boxSizing="borderbox"
                    fontSize="15px"
                    color="#313131"
                    fontWeight="548"
                    fontFamily="Muli, sans-serif"
                    display="inline-block"
                  >
                    Enter your number to
                    <br />
                    Signup or Login
                    <Input
                      onChange={loginNum}
                      variant="flushed"
                      padding="20px 0px 4px 22px"
                      placeholder="Enter your phone number*"
                      aria-placeholder="Enter"
                      fontSize="13px"
                      textUnderlineOffset="black"
                      isRequired="true"
                      maxW="250px"
                      type="number"
                      tabIndex="0"
                      marginTop="30px"
                      bg={"white"}
                    />
                    <Button
                      onClick={handleLogin}
                      fontSize="12px"
                      marginTop="300px"
                      padding="25px 100px"
                      bg="#bababa"
                      color="white"
                      disabled
                      borderRadius="10px"
                      _hover="none"
                    >
                      Continue
                    </Button>
                  </Flex>
                </Box>
              </Flex>
              <ModalCloseButton _hover={"none"} />

              {/* <ModalFooter>
              <Button color="white" bg="#bababa" variant="ghost">
                Continue
              </Button>
            </ModalFooter> */}
            </ModalContent>
          </Modal>
        </Stack>
      </Flex>
      {/* </Flex> */}
    </Box>
  );
}

export default WithSubnavigation;
