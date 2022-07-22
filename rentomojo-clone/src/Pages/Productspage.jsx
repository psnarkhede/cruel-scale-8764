import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SliderComponent from "../Components/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Productapp/action";
import SingleProduct from "../Components/SingleProduct";
import { Link } from "react-router-dom";

const Productspage = () => {
  const data = useSelector((state) => state.data);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Box>
      <Navbar />
      <Flex justifyContent="center">
        <Box
          width="25%"
          height="250vh"
          border="1px solid red"
          justifyContent="center"
        >
          <Box
            height="15vh"
            width="85%"
            border="1px solid grey"
            borderRadius="3px"
            justifyContent="center"
            margin="auto"
            marginTop="50px"
            padding="5px"
          >
            <Box width="90%" justifyContent="center" margin="auto">
              <Text fontFamily="Muli,sans-serif" fontSize="13px">
                CHOOSE RENTAL TENURE
              </Text>
              <SliderComponent />
            </Box>
          </Box>
          <Box
            justifyContent="center"
            margin="auto"
            marginTop="40px"
            border="1px solid grey"
            borderRadius="3px"
            height="30vh"
            width="85%"
            padding="5px"
          >
            <Text fontFamily="Muli,sans-serif" fontSize="13px">
              PRODUCTS TYPE
            </Text>
            <Box marginTop="35px">
              <CheckboxGroup padding="15px" marginTop="15px" color="grey">
                <Stack>
                  <Checkbox color="grey">Sofas</Checkbox>
                  <Checkbox color="grey">Center-Tabels</Checkbox>
                  <Checkbox color="grey">Shoe-Racks</Checkbox>
                  <Checkbox color="grey">TV Units</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
          </Box>
        </Box>
        <Box width="65%" height="250vh" border="1px solid red">
          <Grid
            templateColumns="repeat(4,1fr)"
            templateRows="repeat(5,1fr)"
            gap="15px"
            paddingLeft="7px"
            marginTop="50px"
          >
            {data.map((item) => {
              return (
                // <GridItem
                //   width="200px"
                //   height="200px"
                //   border="1px solid grey"
                // ></GridItem>

                <SingleProduct {...item} />
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Productspage;
