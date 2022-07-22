import {
  Box,
  Button,
  Fade,
  Flex,
  ScaleFade,
  Slide,
  SlideFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiPackage } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { GiWashingMachine, GiOfficeChair } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import { RiEBikeLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
function FadeEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box p="40px" mt="4" rounded="md" shadow="md">
          <Flex
            marginTop={"70px"}
            padding="5px"
            gap="20px"
            flexDirection={"row"}
            justifyContent="space-between"
            transform={"translate(0%, -50%)"}
            // border={"1px solid red"}
          >
            <Box
              border={"1px solid grey"}
              borderRadius="10px"
              padding="30px 40px 15px 40px"
              cursor="pointer"
            >
              <BiPackage size={"60px"} />
              <Text>Package</Text>
            </Box>
            <Box
              border={"1px solid grey"}
              borderRadius="10px"
              padding="30px 40px 15px 40px"
              cursor="pointer"
            >
              <IoBedOutline size={"60px"} />
              <Text>Furniture</Text>
            </Box>
            <Box
              border={"1px solid grey"}
              borderRadius="10px"
              cursor="pointer"
              padding="30px 40px 15px 40px"
            >
              <GiWashingMachine size={"60px"} />
              <Text>Appliances</Text>
            </Box>
            <Box
              border={"1px solid grey"}
              borderRadius="10px"
              padding="30px 40px 15px 40px"
              cursor="pointer"
            >
              <AiOutlineMobile size={"60px"} />
              <Text>Electronics</Text>
            </Box>
            <Box
              border={"1px solid grey"}
              borderRadius="10px"
              padding="30px 40px 15px 40px"
              cursor="pointer"
            >
              <RiEBikeLine size={"60px"} />
              <Text>Bikes</Text>
            </Box>
            <Box
              border={"1px solid grey"}
              borderRadius="10px"
              padding="30px 40px 15px 40px"
              cursor="pointer"
            >
              <CgGym size={"60px"} />
              <Text>Fitness</Text>
            </Box>
            <Box
              border={"1px solid grey"}
              borderRadius="10px"
              padding="30px 40px 15px 40px"
              cursor="pointer"
            >
              <GiOfficeChair size={"60px"} />
              <Text margin={"0"}>Essentials</Text>
            </Box>
          </Flex>
        </Box>
      </Fade>
    </Box>
  );
}

export default FadeEx;