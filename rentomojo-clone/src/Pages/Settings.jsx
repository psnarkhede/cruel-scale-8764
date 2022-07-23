import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Modal,
  Input,
  ModalOverlay,
  ModalContent,
  IconButton,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
//import { ViewIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";

const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Navbar/>
    <Container
      maxW="700px"
      padding="40px 40px"
      minH="500px"
      border="1px solid transparent"
    >
      <Flex
        alignContent="flex-start"
        border="transparent"
        gap="20px"
        flexDirection="column"
      >
        <Box>
          <Text
            fontWeight="400"
            fontSize="22px"
            fontStyle="normal"
            color="#313131"
            display="flex"
            lineHeight="31px"
            fontFamily="Muli, sans-serif;"
          >
            My Settings
          </Text>
          <Box marginTop="10px" width="50px" height="2.5px" bg="#dc3226" />
        </Box>
        <Box marginTop="30px">
          <Text
            display="flex"
            lineHeight="21px"
            fontSize="13px"
            fontWeight="300"
          >
            What's your name?*
          </Text>
          <Text
            display="flex"
            fontSize="22px"
            lineHeight="24px"
            fontWeight="300"
          >
            MALLIKARJUN ANNIGERI
          </Text>
          <Box
            marginTop="8px"
            width="100%"
            height="1px"
            bg="black"
            _hover={{ bg: "blue" }}
          />
        </Box>
        <Box marginTop="10px">
          <Text
            display="flex"
            lineHeight="18px"
            fontSize="13px"
            fontWeight="300"
          >
            Email address*
          </Text>
          <Text display="flex" fontSize="22px" fontWeight="300">
            mallikarjunaanniger27@gmail.com
          </Text>
          <Box
            marginTop="8px"
            width="100%"
            height="1px"
            bg="black"
            _hover={{ bg: "blue" }}
          />
        </Box>
        <Box marginTop="10px">
          <Text
            display="flex"
            lineHeight="18px"
            fontSize="13px"
            fontWeight="300"
          >
            Mobile Number*
          </Text>
          <Text display="flex" fontSize="22px" fontWeight="300">
            7204502190
          </Text>
          <Box
            marginTop="8px"
            width="100%"
            height="1px"
            bg="black"
            _hover={{ bg: "blue" }}
          />
        </Box>
        <Box>
          <Button
            // display={{ base: "none", md: "inline-flex" }}
            onClick={onOpen}
            fontSize={"17px"}
            marginTop="30px"
            display="flex"
            fontWeight={400}
            color={"white"}
            bg="#dc3226"
            borderRadius="none"
            padding="22px 40px"
            _hover="none"
          >
            Change Password
          </Button>
        </Box>
      </Flex>
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
              width={"75%"}
              height={"480px"}
              marginTop="90px"
            >
              <img
                src="https://img.freepik.com/premium-vector/pink-armchair-with-cats-semi-flat-rgb-color-vector-illustration-chair-with-pets-house-comfortable-couch-living-room-cozy-home-furniture-isolated-cartoon-object-white-background_106317-8068.jpg?size=626&ext=jpg"
                alt="login-State"
                width="800px"
              />
            </Box>
            <Box minWidth={"25%"} borderRightRadius="20px" bg={"#f5f7fa"}>
              <Flex
                margin="60px 30px 10px 40px"
                boxSizing="borderbox"
                fontSize="15px"
                color="#313131"
                fontWeight="548"
                fontFamily="Muli, sans-serif"
                display="inline-block"
              >
                <Input
                  // onChange={loginNum}
                  variant="flushed"
                  padding="20px 20px 4px 22px"
                  placeholder="Enter Password*"
                  aria-placeholder="Enter"
                  fontSize="13px"
                  textUnderlineOffset="black"
                  isRequired="true"
                  maxW="280px"
                  type="text"
                  marginTop="30px"
                  bg={"white"}
                />
                <Input
                  // onChange={loginNum}
                  variant="flushed"
                  padding="20px 10px 8px 22px"
                  placeholder="Confirm Password*"
                  aria-placeholder="Enter"
                  fontSize="13px"
                  textUnderlineOffset="black"
                  isRequired="true"
                  maxW="280px"
                  type="text"
                  marginTop="20px"
                  bg={"white"}
                />
                {/* <ViewIcon /> */}
                {/* <IconButton aria-label="see password" icon={<ViewIcon />} /> */}
                <Text
                  marginTop="230px"
                  fontSize="10px"
                  color="#9c9c9c"
                  fontWeight="600"
                >
                  Note: Please enter at least 6 characters
                </Text>
                <Button
                  // onClick={handleLogin}
                  fontSize="12px"
                  disabled
                  marginTop="20px"
                  padding="25px 100px"
                  bg="#bababa"
                  color="white"
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
    </Container>
    </>
  );
};

export default Settings;
