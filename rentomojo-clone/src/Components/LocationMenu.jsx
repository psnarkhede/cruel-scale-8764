import React, { useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
  Input,
  Box,
  Grid,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import CityList from "./CityList";

export default function LocationMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = "600px";
  const cities = [
    {
      id: 1,
      city_Name: "New Delhi",
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
      id: 6,
      city_Name: "Chandigarh",
      image:
        "https://cdn.iconscout.com/icon/free/png-64/chandigarh-1-161356.png",
    },
    {
      id: 7,
      city_Name: "Chennai",
      image: "https://cdn.iconscout.com/icon/free/png-64/chennai-119687.png",
    },
    {
      id: 8,
      city_Name: "Mumbai",
      image:
        "https://cdn.iconscout.com/icon/free/png-64/gatewayofindia-119678.png",
    },
    {
      id: 9,
      city_Name: "Ahemdabad",
      image:
        "https://cdn.iconscout.com/icon/free/png-64/jhultaminar-119680.png",
    },
    {
      id: 10,
      city_Name: "Pune",
      image:
        "https://cdn.iconscout.com/icon/free/png-64/shanivarwada-2-161359.png",
    },
    {
      id: 11,
      city_Name: "Surat",
      image: "https://cdn.iconscout.com/icon/free/png-64/surat-1-161360.png",
    },
    {
      id: 12,
      city_Name: "Agra",
      image: "https://cdn.iconscout.com/icon/free/png-64/tajmahal-119684.png",
    },
    {
      id: 13,
      city_Name: "Faridabad",
      image: "https://cdn.iconscout.com/icon/free/png-64/kerala-119681.png",
    },
    {
      id: 14,
      city_Name: "Kolkata",
      image: "https://cdn.iconscout.com/icon/free/png-64/victoria-119685.png",
    },
    {
      id: 15,
      city_Name: "Noida",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuilX4VHbwnr5zvHZSwYR0GWbkBEoNiUxcSw&usqp=CAU",
    },
    {
      id: 16,
      city_Name: "Gandhiagar",
      image:
        "https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Ahmedabad-512.png",
    },
  ];

  return (
    <Box>
      <Tooltip label="Click to Change city" aria-label="A tooltip">
        <Button
          onClick={() => {
            handleSizeClick(sizes);
            setColor("white");
          }}
          key={size}
          m={4}
          bg="transparent"
          _hover={{ transition: "none" }}
          _active={{ borderStyle: "outset" }}
        >
          Pune
          <AiOutlineDown />
        </Button>
      </Tooltip>
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Box margin={"15px"} padding="10px">
            <Input
              type="search"
              placeholder=" Search city here"
              padding={"20px"}
              variant="unstyled"
              border="1px solid rgb(186,186,186)"
            />
            <Box
              // border={"1px solid red"}
              marginTop={"30px"}
            >
              <Grid
                templateColumns="repeat(8, 1fr)"
                gap={6}
                padding="0px"
                margin="10px"
              >
                {cities.map((e) => {
                  return (
                    <Box>
                      <CityList
                        city={e.city_Name}
                        key={e.id.toString()}
                        image={e.image}
                      />
                    </Box>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
}
