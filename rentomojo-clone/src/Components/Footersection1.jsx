import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Footersection1 = () => {
  return (
    <Box
      bg={"rgb(245,247,250)"}
      // border="1px solid red"
      padding={"60px 40px 20px 40px"}
      // height="300px"
    >
      <Box textAlign={"justify"} padding="10px">
        <Text fontWeight={"semibold"}>
          RentoMojo Pune: The Budget Way To A Better Lifestyle!
        </Text>
        <Text>
          RentoMojo is a leading Indian rental brand. We offer top-quality
          furniture, appliances, and electronics on rent in Pune at a budget
          monthly price. It’s cheaper to rent what your home needs from us,
          instead of spending a huge amount purchasing it from a store. We
          provide great deals and benefits with our rental products.
        </Text>
        <Text>
          You can rent any furniture, appliance, or gadget from us for a few
          weeks or a few years, based on your needs and budget. If you subscribe
          long-term, you get the most savings. We provide multiple added
          advantages with a top-notch rental experience. Our benefits include
          free maintenance, free relocation, and damage waiver.{" "}
        </Text>
        <Text>
          All the products in our inventory are in mint condition. We provide
          furniture, electronics, and appliances made by the best brands in the
          market. You can rent from us within 5 minutes online. We offer free
          doorstep delivery and installation all over Pune, including localities
          such as Camp, Koregaon Park, Hinjewadi, Yerawada, and Kothrud.
        </Text>
      </Box>
      <Box paddingLeft={"10px"}>
        <Button
          colorScheme="grey"
          marginTop={"20px"}
          marginLeft={"-1150px"}
          padding="10px"
          variant="link"
          textDecoration={"none"}
          // border="1px solid red"
        >
          Read More <BsChevronRight />
        </Button>
      </Box>
    </Box>
  );
};

export default Footersection1;
