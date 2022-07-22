import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BiPackage } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import {
  GiWashingMachine,
  GiOfficeChair,
  GiLouvrePyramid,
} from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import { RiEBikeLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";

import { BsLayoutThreeColumns } from "react-icons/bs";

export default function SizeExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = "800px";

  return (
    <Box>
      <Button onClick={() => handleSizeClick(sizes)} key={size} m={4}>
        Pune
      </Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GiLouvrePyramid count={2} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
