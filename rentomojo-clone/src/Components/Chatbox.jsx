import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import "./Chatbox.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

function Chatbox() {
  const initialFocusRef = useRef();
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button
          className="chatbox-button"
          _hover={{ transition: "none" }}
          _active={{ borderStyle: "outset" }}
          bg="transparent"
          marginBottom="10px"
        >
          <BsFillChatQuoteFill size={"60px"} color="red" />
        </Button>
      </PopoverTrigger>
      <PopoverContent color="white">
        <PopoverHeader
          pt={4}
          fontWeight="bold"
          border="0"
          bg={"red"}
          fontSize="20px"
          textAlign={"start"}
        >
          Rentomojo
        </PopoverHeader>
        <PopoverArrow size="20px" />
        <PopoverCloseButton />
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Box fontSize="sm">Step 2 of 4</Box>
          <ButtonGroup size="sm">
            <Button colorScheme="green">Setup Email</Button>
            <Button colorScheme="blue" ref={initialFocusRef}>
              Next
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default Chatbox;
