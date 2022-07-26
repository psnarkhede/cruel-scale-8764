import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsFileEarmarkText, BsCalendar3 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getdataforcartapi } from "../Redux/Cartapp/action";
import { Link } from "react-router-dom";
import { PaymentCard } from "./PaymentCard";
export const OrderDetails = () => {
  const [rent, setRent] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const dispatch = useDispatch();
  const { cartdata } = useSelector((state) => state.cartreducer);

  /*const addPaymentRent = () => {
    const totalProductRent = [...data];
    totalProductRent?.length > 0 &&
      totalProductRent.reduce((previousValue, currentValu) => {
        return Number(previousValue.rent) + Number(currentValu.rent);
      });
  };
  addPaymentRent();
  // console.log (addPaymentRent())

  //  const totalProductRent =0;
  const refundableDeposit = 0;
  const gst = 0;
  const deliverCharge = 0;*/
  useEffect(() => {
    if (cartdata?.length === 0) {
      dispatch(getdataforcartapi());
    }
  }, []);

  useEffect(() => {
    if (cartdata) {
      let rentsum = 0;
      let depositsum = 0;
      cartdata.map((el) => {
        rentsum = rentsum + Number(el.rent);
        depositsum = depositsum + Number(el.deposit);
      });
      setRent(rentsum);
      setDeposit(depositsum);
    }
  }, [cartdata]);

  return (
    <>
      <Box width="100%" height="300px">
        <Flex justifyContent="center">
          <Box
            w="47%"
            height="250px"
            //  p='10px'
          >
            <Flex direction="column" justifyContent="space-around" gap={2}>
              {/* order summary logo */}
              <Box
                //  border='1px solid gray'
                w="100%"
                h="50px"
                p="10px 5px"
              >
                <Flex>
                  <Box>
                    <BsFileEarmarkText fontSize="20px" />
                  </Box>
                  <Box marginLeft="10px" marginTop="-3px">
                    <Text>Order Summary</Text>
                  </Box>
                </Flex>
              </Box>
              {/* order summary */}
              <Box
                //  border='1px solid gray'
                w="100%"
                h="150px"
                px="8px"
                py="5px"
              >
                <Box
                  border="1px solid #CBD5E0"
                  // borderRightWidth='10px'
                  w="98%"
                  h="140px"
                  // p='5px 2px'
                  borderRadius="10px"
                  alignItems="center"
                >
                  <Box fontSize="14px">
                    <Text
                      marginTop="-13px"
                      textAlign="center"
                      bg="white"
                      marginLeft="20px"
                      width="110px"
                    >
                      Payable Now
                    </Text>
                    <Box width="90%" margin="auto" marginTop="20px">
                      <Flex justifyContent="space-between">
                        <Text>Refundable Deposit</Text>
                        <Text>₹{deposit}</Text>
                      </Flex>
                    </Box>

                    <Box width="90%" margin="auto" marginTop="15px">
                      <Flex justifyContent="space-between">
                        <Text>Delivery Charges</Text>
                        <Text>₹297</Text>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box w="47%" h="310px" px="8px" py="5px">
            <Flex direction="column" justifyContent="space-around" gap={3}>
              <Box
                border="1px solid #CBD5E0"
                // borderRightWidth='10px'
                w="98%"
                marginTop="55px"
                // p='5px 2px'
                borderRadius="10px"
                alignItems="center"
              >
                <Flex
                  direction="column"
                  fontSize="14px"
                  justifyContent="space-around"
                  gap={3}
                >
                  <Box>
                    <Text
                      marginTop="-13px"
                      textAlign="center"
                      bg="white"
                      marginLeft="20px"
                      width="130px"
                    >
                      Monthly Payable
                    </Text>
                    <Box width="90%" margin="auto" marginTop="20px">
                      <Flex justifyContent="space-between">
                        <Text>Product Rent</Text>
                        <Text>₹{rent}/mo</Text>
                      </Flex>
                    </Box>
                  </Box>

                  <Box width="90%" margin="auto" marginTop="5px">
                    <Flex justifyContent="space-between">
                      <Text>GST</Text>
                      <Text>₹{(rent * 18) / 100}/mo</Text>
                    </Flex>
                  </Box>
                  <br />
                  {/* <br/> */}
                  <Divider />
                  <Box width="90%" margin="auto" paddingBottom="10px">
                    <Flex justifyContent="space-between">
                      <Text>Total Monthly Rent</Text>
                      <Text>₹{(rent + (rent * 18) / 100).toFixed(2)}/mo</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Box marginTop="5px">
              <Flex fontSize="10px">
                <span>
                  {" "}
                  <BsCalendar3 />
                  <Text marginLeft="20px" marginTop="-12px">
                    Not to be paid now. Pay post usage every month.
                  </Text>
                </span>
              </Flex>
            </Box>
          </Box>
        </Flex>

        <Box w="50%"  h="90px" p="10px 5px">
          <Flex direction="row" justifyContent="left">
            <PaymentCard amount={deposit+297} />
          </Flex>
        </Box>
      </Box>

    </>
  );
};
