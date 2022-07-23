import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct";
import { Box, Grid, Text } from "@chakra-ui/react";
import { getProducts } from "../Redux/Productapp/action";

const Wishlist = () => {
  const { category } = useParams();
  const data = useSelector((state) => state.productsreducer.data);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(category));
  }, [dispatch, getProducts]);

  return (
    <Box>
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

            <SingleProduct {...item} category={category} />
          );
        })}
      </Grid>
    </Box>
  );
};

export default Wishlist;
