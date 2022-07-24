import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { getlikeitemapi, removefromlikeapi } from "../Redux/Likeapp/action";
import { Icon } from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Wishlistpage = () => {
  const dispatch = useDispatch();

  const { likeditems } = useSelector((state) => state.likereducer);

  useEffect(() => {
    dispatch(getlikeitemapi());
  }, []);

  const removelikeditem = (id) => {
    dispatch(removefromlikeapi(id));
    dispatch(getlikeitemapi());
  };

  return (
    <>
      <Navbar />

      <Box padding="40px">
        <Grid templateColumns={"repeat(4,1fr)"} gap={6}>
          {likeditems
            ? likeditems.map((el) => (
                <Box
                  key={el.id}
                  border="1px solid silver"
                  borderRadius="5px"
                  height="350px"
                >
                  <Box display="flex">
                    <Image
                      width="100%"
                      height="250px"
                      borderTopLeftRadius="5px"
                      borderTopRightRadius="5px"
                      src={el.productimage}
                      cursor="pointer"
                    />
                    <Box
                      width="35px"
                      height="35px"
                      borderRadius="50%"
                      bg="white"
                      marginLeft="-50px"
                      marginTop="20px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Icon
                        onClick={() => removelikeditem(el.id)}
                        cursor="pointer"
                        fontSize="22px"
                        as={FcLike}
                      />
                    </Box>
                  </Box>

                  <Link to={`/product/${el.category}/${el.newid}`}>
                    <Box
                      borderBottom="1px solid silver"
                      width="85%"
                      margin="auto"
                      textAlign="left"
                      padding="10px"
                    >
                      <Text fontWeight="500" color="blackAlpha.700">
                        {el.title}
                      </Text>
                    </Box>

                    <Box
                      width="90%"
                      margin="auto"
                      textAlign="left"
                      padding="10px"
                      color="blackAlpha.700"
                    >
                      <Flex>
                        <Icon
                          marginLeft="5px"
                          fontWeight="500"
                          fontSize="16px"
                          marginTop="5px"
                          as={BiRupee}
                        />
                        <Text fontSize="12px">
                          <span style={{ fontSize: "16px", fontWeight: "500" }}>
                            {el.rent}/
                          </span>{" "}
                          mo
                        </Text>
                      </Flex>
                    </Box>
                  </Link>
                </Box>
              ))
            : ""}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Wishlistpage;
