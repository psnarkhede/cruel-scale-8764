<<<<<<< Updated upstream
import React from 'react'

const Productspage = () => {
  return (
    <div>Productspage</div>
  )
}
=======
import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Productapp/action";
import SingleProduct from "../Components/SingleProduct";

const Productspage = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.data)
  console.log(data)
  useEffect(() => {


    dispatch(getProducts())
  }, [])
  return <Box>
    <Navbar />
    <Flex margin="auto" justifyContent="center">


      <Box height="70vh" width={"30%"} border="1px solid red"></Box>


      <Box height="70vh" width="70%" border="1px solid blue">


        {
         
            data.map((item)=>{
            return(
            <Box key={item.id}>
              <SingleProduct {...item} />
            </Box>
            )
          })
         
        }


      </Box>

    </Flex>
    <Footer />


  </Box>;
};
>>>>>>> Stashed changes

export default Productspage