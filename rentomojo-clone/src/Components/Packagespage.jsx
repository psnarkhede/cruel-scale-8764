import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsDot, BsCircleFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const Packagespage = () => {

  const { newproduct } = useSelector((state) => state.productsreducer);



  return (
    <Box marginTop="50px">
      <Box
        width="85%"
        border="1px solid silver"
        borderRadius="8px"
        margin="auto"
        padding="20px"
      >
        <Flex gap="10px">
          <Image
            width="7%"
            height="45px"
            src="https://www.rentomojo.com/public/images/icons/virusSafetyGreen.png"
          />
          <Text textAlign="left" width="70%" paddingLeft="20px" fontSize="16px">
            <span style={{ fontWeight: "500" }}>
              {" "}
              Safety precautions during COVID-19.
            </span>{" "}
            We’re taking additional steps and precautionary measures to protect
            our community from COVID-19.
          </Text>

          <Box
            width="20%"
            height="80px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <Text fontWeight="500" cursor="pointer">
              Know more
            </Text>
            <Icon cursor="pointer" as={IoIosArrowDroprightCircle} />
          </Box>
        </Flex>
      </Box>

      {/* Product details */}

      <Text
        fontSize="22px"
        fontWeight="500"
        textAlign="left"
        marginTop="30px"
        paddingLeft="7.5%"
      >
        Product Details
      </Text>
      <Box
        bgColor="#dc3226"
        height="2px"
        width="6%"
        marginLeft="7.5%"
        marginTop="10px"
      />

      {newproduct.product
        ? newproduct.product.map((items, ind) => (
            <Box key={ind}>
              <Box width="85%" margin="auto" marginTop="30px">
                <Flex>
                  <Box width="40%" height="60vh">
                    <Image
                      width="100%"
                      height="60vh"
                      src={items.productimage}
                    />
                  </Box>

                  <Box
                    textAlign="left"
                    boxSizing="borderbox"
                    paddingLeft="4%"
                    width="60%"
                    height="auto"
                  >
                    <Text fontSize="18px" fontWeight="500">
                      {items.title}
                    </Text>
                    <Box
                      bgColor="gray"
                      height="2px"
                      width="8%"
                      marginTop="5px"
                    />

                    <Text marginTop="20px" fontSize="13px" color="gray.500">
                      {items.description}
                    </Text>

                    <Box marginTop="30px">
                      <Flex gap="40px">
                        <Box>
                          <Box>
                            <Text width="150px" fontSize="14px">
                              Size & Diamensions
                            </Text>
                            <Flex marginTop="10px" alignItems="center">
                              {items.dimensions ? (
                                <Icon
                                  marginLeft="-5px"
                                  fontSize="30px"
                                  color="gray.500"
                                  as={BsDot}
                                />
                              ) : (
                                ""
                              )}
                              <Flex>
                                {items.dimensions
                                  ? items.dimensions.map((el, id) => (
                                      <Box key={id}>
                                        <Text
                                          fontSize="14px"
                                          color="gray.500"
                                          width="42px"
                                        >
                                          {el}
                                          {id == 0
                                            ? `"L x`
                                            : id == 1 &&
                                              items.dimensions.length > 2
                                            ? `"B x`
                                            : id == 2
                                            ? `"H`
                                            : ""}
                                        </Text>
                                      </Box>
                                    ))
                                  : ""}
                              </Flex>
                            </Flex>
                          </Box>

                          <Box marginTop="40px">
                            <Text fontSize="14px">Material & Color</Text>
                            <Flex
                              marginTop="10px"
                              alignItems="center"
                              gap="10px"
                            >
                              {items.color !== "" ? (
                                <Icon
                                  fontSize="10px"
                                  color={items.color}
                                  as={BsCircleFill}
                                />
                              ) : (
                                ""
                              )}
                              <Text fontSize="14px" color="gray.500">
                                {items.material}
                              </Text>
                            </Flex>
                          </Box>
                        </Box>

                        <Box>
                          <Text fontSize="14px">Features & Specs</Text>
                          <UnorderedList>
                            {items.features
                              ? items.features.map((el) => (
                                  <ListItem
                                    marginTop="10px"
                                    fontSize="14px"
                                    color="gray.500"
                                  >
                                    {el}
                                  </ListItem>
                                ))
                              : ""}
                          </UnorderedList>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              {/*cost*/}

              <Box
                border="1px solid gray"
                width="50%"
                margin="auto"
                marginTop="20px"
                padding="10px"
              >
                <Flex justifyContent="space-between">
                  <Box>
                    <Flex alignItems="center">
                      <Text color="gray.500">Monthly Rental:</Text>
                      <Icon
                        marginLeft="5px"
                        color="black"
                        fontWeight="500"
                        fontSize="18px"
                        as={BiRupee}
                      />
                      <Text fontWeight="500"> {items.rent} </Text>
                    </Flex>
                  </Box>

                  <Box>
                    <Flex alignItems="center">
                      <Text color="gray.500">Deposit:</Text>
                      <Icon
                        marginLeft="5px"
                        color="black"
                        fontWeight="500"
                        fontSize="18px"
                        as={BiRupee}
                      />
                      <Text fontWeight="500"> {items.deposit} </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Box>
          ))
        : ""}
    </Box>
  );
};

export default Packagespage;
