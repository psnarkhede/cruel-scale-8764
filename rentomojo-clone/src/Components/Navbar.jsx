import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Input,
  Image,
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
import Loginpage from "../Pages/Loginpage";
import { AiOutlineSearch } from "react-icons/ai";

function WithSubnavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginNumber, setLoginNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [login, SetLogin] = useState(true);

  const handleLoginSubmit = () => {
    localStorage.setItem("Email", JSON.stringify(loginEmail));
    localStorage.setItem("Password", JSON.stringify(loginPassword));
    SetLogin(!login);
  };

  return (
    <Box
      className="navbar"
      margin="auto"
      width="100%"
      bg={useColorModeValue("white")}
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
        <Box>
          <Flex>
            <LocationMenu />
          </Flex>
        </Box>
        <Box>
          <Flex
            border="1px solid rgb(186,186,186)"
            borderRadius={"10px"}
            padding="10px"
          >
            <Input
              placeholder="Search for products"
              type="search"
              variant="unstyled"
              width={"600px"}
              margin={"auto"}
              autoComplete="on"
            />
            <AiOutlineSearch size={"25px"} />
          </Flex>
        </Box>
        <Link to="/cart">
          <Flex alignItems={"center"} gap="10px" cursor="pointer">
            <BsCart2 size={"20px"} />
            <Text>Cart</Text>
          </Flex>
        </Link>

        {login ? (
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
                height={"580px"}
                borderRadius="20px"
                margin="auto"
              >
                <Flex>
                  <Box minW={"55%"} height={"480px"} marginTop="90px">
                    <img
                      src="https://img.freepik.com/premium-vector/pink-armchair-with-cats-semi-flat-rgb-color-vector-illustration-chair-with-pets-house-comfortable-couch-living-room-cozy-home-furniture-isolated-cartoon-object-white-background_106317-8068.jpg?size=626&ext=jpg"
                      alt="login-State"
                      width="800px"
                    />
                  </Box>
                  <Box minWidth={"45%"} borderRightRadius="20px" bg={"#f5f7fa"}>
                    <Flex
                      boxSizing="borderbox"
                      margin="60px 30px 10px 50px"
                      fontSize="15px"
                      color="#313131"
                      fontWeight="548"
                      fontFamily="Muli, sans-serif"
                      display="inline-block"
                    >
                      Enter your details to Signup
                      <Input
                        onChange={(e) => setLoginName(e.target.value)}
                        value={loginName}
                        variant="flushed"
                        padding="20px 0px 4px 22px"
                        placeholder="Enter your name*"
                        aria-placeholder="Enter"
                        fontSize="13px"
                        textUnderlineOffset="black"
                        isRequired="true"
                        maxW="250px"
                        type="text"
                        tabIndex="0"
                        marginTop="30px"
                        bg={"white"}
                      />
                      <Input
                        onChange={(e) => setLoginEmail(e.target.value)}
                        value={loginEmail}
                        variant="flushed"
                        padding="20px 0px 4px 22px"
                        placeholder="Enter your email*"
                        aria-placeholder="Enter"
                        fontSize="13px"
                        textUnderlineOffset="black"
                        isRequired="true"
                        maxW="250px"
                        type="email"
                        tabIndex="0"
                        marginTop="20px"
                        bg={"white"}
                      />
                      <Input
                        onChange={(e) => setLoginNumber(e.target.value)}
                        value={loginNumber}
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
                        marginTop="20px"
                        bg={"white"}
                      />
                      <Input
                        onChange={(e) => setLoginPassword(e.target.value)}
                        value={loginPassword}
                        variant="flushed"
                        padding="20px 0px 4px 22px"
                        placeholder="Enter your password*"
                        aria-placeholder="Enter"
                        fontSize="13px"
                        textUnderlineOffset="black"
                        isRequired="true"
                        maxW="250px"
                        type="password"
                        tabIndex="0"
                        marginTop="20px"
                        bg={"white"}
                      />
                      <Text
                        onClick={() => SetLogin(!login)}
                        marginLeft="10px"
                        marginTop="40px"
                        fontSize="14px"
                        color="#9c9c9c"
                        fontWeight="600"
                        cursor="pointer"
                      >
                        <Link to="/login">Already User? Log In</Link>
                      </Text>
                      <Link to="/login">
                        <Button
                          onClick={handleLoginSubmit}
                          disabled={
                            !loginPassword ||
                            !loginName ||
                            !loginEmail ||
                            !loginNumber
                          }
                          fontSize="12px"
                          marginTop="70px"
                          padding="25px 100px"
                          bg="#dc3226"
                          color="white"
                          borderRadius="10px"
                          _hover="none"
                        >
                          Continue
                        </Button>
                      </Link>
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
        ) : (
          <Loginpage />
        )}
      </Flex>
    </Box>
  );
}

export default WithSubnavigation;
