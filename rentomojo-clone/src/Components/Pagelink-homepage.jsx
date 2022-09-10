import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiPackage } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { GiWashingMachine, GiOfficeChair } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import { RiEBikeLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { Link } from "react-router-dom";

export const Pagelinkhomepage = () => {
  return (
    <Flex
      marginTop={"140px"}
      padding="5px"
      gap="20px"
      flexDirection={"row"}
      justifyContent="space-between"
      transform={"translate(0%, -50%)"}

      // border={"1px solid red"}
    >
      <Link to={`/products/${"packages"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
          width="130px"
          height="130px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <BiPackage size={"60px"} />
          <Text>Package</Text>
        </Box>
      </Link>

      <Link to={`/products/${"furniture"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
          width="130px"
          height="130px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <IoBedOutline size={"60px"} />
          <Text>Furniture</Text>
        </Box>
      </Link>

      <Link to={`/products/${"appliances"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
          width="130px"
          height="130px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <GiWashingMachine size={"60px"} />
          <Text>Appliances</Text>
        </Box>
      </Link>

      <Link to={`/products/${"electronics"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
          width="130px"
          height="130px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <AiOutlineMobile size={"60px"} />
          <Text>Electronics</Text>
        </Box>
      </Link>
      <Link to={`/products/${"WFHEssentials"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
          width="130px"
          height="130px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <RiEBikeLine size={"60px"} />
          <Text>Bikes</Text>
        </Box>
      </Link>

      <Link to={`/products/${"fitness"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
          width="130px"
          height="130px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CgGym size={"60px"} />
          <Text>Fitness</Text>
        </Box>
      </Link>

      <Link to={`/products/${"WFHEssentials"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
          width="130px"
          height="130px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <GiOfficeChair size={"60px"} />
          <Text margin={"0"}>WFH Essentials</Text>
        </Box>
      </Link>
    </Flex>
  );
};
