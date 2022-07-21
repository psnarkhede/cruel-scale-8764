import React from "react";
import {
  Menu,
  Box,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
const LocationMenu = () => {
  return (
    <Menu width="50px">
      <MenuButton px={4} py={2} width={"100px"}>
        <Flex margin={"5px"}>
          Pune <AiOutlineDown style={{ margin: "5px 2px 2px 4px" }} />
        </Flex>
      </MenuButton>
      <MenuList marginTop={"-12px"} justifyContent="left" maxWidth={"50px"}>
        <Box>
          <MenuItem>Chennai</MenuItem>
          <MenuItem>Mumbai</MenuItem>
          <MenuItem>Delhi</MenuItem>
          <MenuItem>Noida</MenuItem>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default LocationMenu;
