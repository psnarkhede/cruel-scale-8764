import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Grid } from "@chakra-ui/react";
import { IoBedOutline } from "react-icons/io5";
import {
  MdOutlineEditLocationAlt,
  MdOutlineFreeCancellation,
} from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { GiArmorUpgrade, GiAutoRepair } from "react-icons/gi";

const Features = () => {
  const data = [
    {
      id: 1,
      icon: <IoBedOutline size={"100px"} />,
      title: "Finest-quality products",
      des: "Quality matters to you, and us! That's why we do a strict quality-check for every product.",
    },
    {
      id: 2,
      icon: <MdOutlineEditLocationAlt size={"100px"} />,
      title: "Free relocation",
      des: "Changing your house or even your city? We'll relocate your rented products for free.",
    },
    {
      id: 3,
      icon: <GiAutoRepair size={"100px"} />,
      title: "Free maintenance",
      des: "Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.",
    },

    {
      id: 4,
      icon: <MdOutlineFreeCancellation size={"100px"} />,
      title: "Cancel anytime",
      des: "Pay only for the time you use the product and close your subscription without any hassle.",
    },
    {
      id: 5,
      icon: <TbTruckReturn size={"100px"} />,
      title: "Easy return on delivery",
      des: "If you don't like the product on delivery, you can return it right away—no questions asked.",
    },
    {
      id: 6,
      icon: <GiArmorUpgrade size={"100px"} />,
      title: "Keep upgrading",
      des: "Bored of the same product? Upgrade to try another, newer design and enjoy the change!",
    },
  ];
  return (
    <Box width="95%" margin="auto">
      <Flex>
        <Box padding={"20px"} marginTop="70px">
          <Text
            fontFamily={"Muli, sans-serif"}
            fontSize="30px"
            fontWeight={"bold"}
          >
            There's more
          </Text>
          <Text
            fontFamily={"Muli, sans-serif"}
            fontSize="30px"
            color={"grey"}
            textAlign="start"
          >
            to renting
          </Text>
          <Box width="50px" border={"1px solid red"}></Box>
        </Box>
      </Flex>
      <Box marginTop={"20px"} margin="20px">
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          {data.map((e) => {
            return (
              <Box key={e.id}>
                {e.icon}
                <Text textAlign={"start"} fontWeight="600">
                  {e.title}
                </Text>
                <Text textAlign={"start"}>{e.des}</Text>
              </Box>
            );
          })}
        </Grid>
      </Box>
      <Button
        colorScheme="teal"
        variant="link"
        marginLeft={"-1140px"}
        marginBottom="20px"
      >
        KNOW MORE
      </Button>
    </Box>
  );
};
export default Features;
