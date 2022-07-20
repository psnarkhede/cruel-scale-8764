import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Box,
  Flex,
} from "@chakra-ui/react";

// const Loginpage = () => {
//   return (
//     <div>Loginpage</div>
//   )
// }

function Loginpage() {
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
    <>
      <Button onClick={onOpen}>LOGIN/SIGNUP</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minWidth={"800px"}
          height={"570px"}
          borderRadius="20px"
          margin="auto"
        >
          <Flex>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
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
    </>
  );
}

export default Loginpage;
