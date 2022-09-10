import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  GridItem,
  Input,
  Stack,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import React, { useEffect } from "react";
import SliderComponent from "../Components/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Productapp/action";
import SingleProduct from "../Components/SingleProduct";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FilterProducts from "../Components/FilterProducts";

const Productspage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { prodtype } = searchParams;
  const { category } = useParams();

  const data = useSelector((state) => state.productsreducer.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(category, { params: { prodtype: prodtype } }));
  }, [category, dispatch]);

  return (
    <>
      <Box>
        <Navbar />
        <Box >
          <Flex justifyContent="center">
            <Box width="25%"  boxSizing="border-box" paddingLeft="4%" height="auto" justifyContent="center">
              <Box
                height="18vh"
                width="85%"
                border="1px solid grey"
                borderRadius="3px"
                justifyContent="center"
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
                marginTop="40px"
                border="1px solid grey"
                borderRadius="3px"
                height="75vh"
                width="85%"
                padding="5px"
              >
                <Text fontFamily="Muli,sans-serif" fontSize="13px">
                  PRODUCTS TYPE
                </Text>
                <Box marginTop="35px">
                  <FilterProducts category={category} />
                </Box>
              </Box>

              <Box
                height="15vh"
                width="85%"
                border="1px solid grey"
                borderRadius="3px"
                justifyContent="center"
                marginTop="50px"
                padding="5px"
              >
                <Box width="90%" justifyContent="center" margin="auto">
                  <Text fontFamily="Muli,sans-serif" fontSize="13px">
                    AVAILABILITY
                  </Text>
                  <Flex justifyContent="space-evenly">
                    <Checkbox marginTop="12px" />
                    <Text marginTop="12px" color="grey">
                      Out of Stock
                    </Text>
                  </Flex>
                </Box>
              </Box>

              <Box
                height="24vh"
                width="85%"
                border="1px solid grey"
                borderRadius="3px"
                justifyContent="center"
                marginTop="50px"
                padding="5px"
              >
                <Box width="90%" justifyContent="center" margin="auto">
                  <Text fontFamily="Muli,sans-serif" fontSize="15px">
                    What do you want us to launch next?
                  </Text>
                  <Text color="grey" fontSize="15px">
                    Suggest us a product
                  </Text>
                  <Input marginTop="5px" placeholder="Your Suggestion" />
                </Box>
              </Box>
            </Box>
            <Box width="70%" height="auto" >
              <Grid
                templateColumns="repeat(3,1fr)"
                templateRows="repeat(6,1fr)"
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

                    <SingleProduct
                      key={item.id}
                      {...item}
                      category={category}
                    />
                  );
                })}
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Productspage;
