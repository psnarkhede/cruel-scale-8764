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
import { FcLike } from "react-icons/fc";

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
          <Box cursor="pointer" marginLeft={"-15px"}>
            <Flex>
              <Image
                src="data:image/png;base64,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"
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
        <Box marginLeft="10px">
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
              width={"580px"}
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

        <Link to="/wishlist">
          <FcLike color="red" size={"20px"} />
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
