import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useRef } from "react";

export const Netbanking = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>
        {" "}
        <Flex flexDirection={"row"}>
          <Image
            cursor="pointer"
            src="https://www.rentomojo.com/public/images/cart/payment/razorpay.png"
            w="100px"
            h="50px"
          />
        </Flex>
      </Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box >
              <Flex>
                <Image src="https://www.rentomojo.com/images/rm-razorpay.png" />
                <Box marginTop="20px" marginLeft="20px">
                  <Text>RentoMojo </Text>
                  <Text> Order Id: 201570320</Text>
                  <Text>₹ 3234 </Text>
                </Box>
              </Flex>

              <Box>
                <Text textAlign="left">English</Text>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
