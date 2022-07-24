import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Box,
  Flex,
  Text,
  Button,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";
import Footer from "../Components/Footer";

const Loginpage = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [home, setHome] = useState(true);
  const [flag, setFlag] = useState(false);

  const handleLoginSubmit = () => {
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!loginEmail || !loginPassword) {
      setFlag(true);
    } else if (loginEmail !== mail || loginPassword !== pass) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  };

  return (
    <>
      {home ? (
        <Box>
          {/* <Button onClick={onOpen}>Login</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay /> */}
          {flag && (
            <Alert status="error">
              <AlertIcon />
              You have entered wrong information!
            </Alert>
          )}
          <Box
            boxShadow="outline"
            margin="auto"
            marginTop="40px"
            maxW="800px"
            minWidth={"800px"}
            height={"570px"}
            borderRadius="20px"
          >
            <Flex>
              <Box minW={"53%"} height={"480px"} marginTop="90px">
                <img
                  src="https://img.freepik.com/premium-vector/pink-armchair-with-cats-semi-flat-rgb-color-vector-illustration-chair-with-pets-house-comfortable-couch-living-room-cozy-home-furniture-isolated-cartoon-object-white-background_106317-8068.jpg?size=626&ext=jpg"
                  alt="login-State"
                  width="800px"
                />
              </Box>
              <Box minWidth={"47%"} borderRightRadius="20px" bg={"#f5f7fa"}>
                <Flex
                  boxSizing="borderbox"
                  margin="60px 40px 10px 40px"
                  fontSize="15px"
                  color="#313131"
                  fontWeight="548"
                  fontFamily="Muli, sans-serif"
                  display="inline-block"
                >
                  Login to your account!
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
                    marginTop="30px"
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
                    marginTop="30px"
                    bg={"white"}
                  />
                  <Text
                    marginLeft="10px"
                    marginTop="180px"
                    fontSize="14px"
                    color="#9c9c9c"
                    fontWeight="600"
                  >
                    Don't have account? Create one,
                  </Text>
                  {/* <Link to="/"> */}
                  <Button
                    onClick={handleLoginSubmit}
                    disabled={!loginPassword || !loginEmail}
                    fontSize="12px"
                    marginTop="40px"
                    padding="25px 100px"
                    bg="#dc3226"
                    color="white"
                    borderRadius="10px"
                    _hover="none"
                  >
                    Continue
                  </Button>
                  {/* </Link> */}
                </Flex>
              </Box>
            </Flex>
            {/* <ModalCloseButton _hover={"none"} /> */}
          </Box>
          {/* </Modal> */}
        </Box>
      ) : (
        <>
          <Alert status="success">
            <AlertIcon />
            Login Successful.
          </Alert>
          <Homepage />
        </>
      )}
    </>
  );
};

export default Loginpage;
