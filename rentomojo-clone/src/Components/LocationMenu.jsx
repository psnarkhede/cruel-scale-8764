import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
  Input,
  Box,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import CityList from "./CityList";

export default function SizeExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = "700px";
  const cities = [
    {
      id: 1,
      city_Name: "Delhi",
      image: "https://cdn.iconscout.com/icon/free/png-64/delhi-1-161357.png",
    },
    {
      id: 2,
      city_Name: "Hyderabad",
      image: "https://cdn.iconscout.com/icon/free/png-64/charminar-119682.png",
    },
    {
      id: 3,
      city_Name: "Banglore",
      image: "https://cdn.iconscout.com/icon/free/png-64/assembly-119679.png",
    },
    {
      id: 4,
      city_Name: "Lucknow",
      image: "https://cdn.iconscout.com/icon/free/png-64/bara-119683.png",
    },
    {
      id: 5,
      city_Name: "Jaipur",
      image: "https://cdn.iconscout.com/icon/free/png-64/hawamahal-119686.png",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
    {
      id: 1,
      city_Name: "Delhi",
      image:
        "https://cdn-icons.flaticon.com/png/512/3375/premium/3375454.png?token=exp=1658464833~hmac=7741f268b55d11867efd5e0239c8f86b",
    },
  ];

  return (
    <Box>
      <Button
        onClick={() => handleSizeClick(sizes)}
        key={size}
        m={4}
        bg="transparent"
        // colorScheme="white"
        variant={"ghost"}
      >
        Pune
        <AiOutlineDown />
      </Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Box margin={"25px"}>
            <Input
              type="search"
              placeholder=" Search city here"
              padding={"20px"}
            />
            <Grid
              templateColumns="repeat(8, 1fr)"
              gap={6}
              padding="10px"
              margin="20px"
            >
              {cities.map((e) => {
                return <CityList city={e.city_Name} image={e.image} />;
              })}
            </Grid>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
}
