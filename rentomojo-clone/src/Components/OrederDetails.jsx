import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import{BsFileEarmarkText,BsCalendar3} from"react-icons/bs"
export const OrderDetails=()=>{


    return (
        <>
            <Box
            //  border='1px solid teal'
             w='47%'
             h='310px'
            //  p='10px'
            >
                <Flex direction='column' justifyContent='space-around' gap={2}>
                    {/* order summary logo */}
                    <Box 
                    //  border='1px solid gray'
                     w="100%"
                     h='50px'
                     p='10px 5px'
                    >
                     <Flex>
                        <Box>
                            <BsFileEarmarkText fontSize='20px'/>
                        </Box>
                        <Box marginLeft='10px' marginTop='-3px'>
                            <Text>
                             Order Summary
                            </Text>
                        </Box>
                     </Flex>
                    </Box>
                    {/* order summary */}
                    <Box
                    //  border='1px solid gray'
                     w="100%"
                     h='150px'
                     px='8px'
                     py='5px'
                    >
                      <Box
                        border='1px solid #CBD5E0'
                        // borderRightWidth='10px'
                        w='98%'
                        h='140px'
                        // p='5px 2px'
                        borderRadius='10px'
                        alignItems='center'
                       >
                        <Flex direction='column' justifyContent='space-around' gap={3}>
                            <Box marginLeft='25px' marginTop='-13px'>
                            <Text>
                            Payable Now 
                            </Text>
                            </Box>
                           
                            <Box>
                                <Flex justifyContent='space-around'>
                                <Text>
                                  Refundable Deposit
                                </Text>
                                 <Text>
                                 ₹2946
                                 </Text>
                                </Flex>
                              
                            </Box> 
                            <Box>
                                <Flex justifyContent='space-around'>
                                <Text>
                                  Delivery Charges
                                </Text>
                                 <Text>
                                 ₹297
                                 </Text>
                                </Flex>
                              
                            </Box> 
                            
                        </Flex>
                       </Box>  
                    </Box>
                     {/* pay button */}
                    <Box
                    //   border='1px solid gray'
                      w="100%"
                      h='90px'
                      p='10px 5px'
                    >
                        <Flex direction='row' justifyContent='space-around' >
                            {/* <Box> */}
                            <Button colorScheme='red'  w='98%' h='60px'>
                                <span >₹3234 <Text fontSize='12px'>
                                  Pay Now
                                </Text>  </span>
                                <Text marginLeft='170px'>Proceed</Text>
                            </Button>
                            {/* </Box> */}
                            
                        </Flex> 
                    </Box>

                </Flex>
            </Box>
            {/* monthly payable */}
            <Box
            //   border='1px solid teal'
              w='47%'
              h='310px'
              px='8px'
              py='5px'
            //   p='10px'
            >
                <Flex direction='column' justifyContent='space-around' gap={3}>
                <Box
                        border='1px solid #CBD5E0'
                        // borderRightWidth='10px'
                        w='98%'
                        h='240px'
                        marginTop='55px'
                        // p='5px 2px'
                        borderRadius='10px'
                        alignItems='center'
                       >
                        <Flex direction='column' justifyContent='space-around' gap={3}>
                            <Box marginLeft='25px' marginTop='-13px'>
                            <Text>
                              Monthly Payable
                            </Text>
                            </Box>
                           
                            <Box>
                                <Flex justifyContent='space-around'>
                                <Text>
                                  Product Rent
                                </Text>
                                 <Text>
                                 ₹1727/mo
                                 </Text>
                                </Flex>
                              
                            </Box> 
                            <Box>
                                <Flex justifyContent='space-around'>
                                <Text>
                                  Addons Rent
                                </Text>
                                 <Text>
                                 ₹179/mo
                                 </Text>
                                </Flex>
                              
                            </Box> 
                            <Box>
                                <Flex justifyContent='space-around'>
                                <Text>
                                  GST
                                </Text>
                                 <Text>
                                 ₹343/mo
                                 </Text>
                                </Flex>
                              
                            </Box> 
                            <br/>
                            {/* <br/> */}
                            <Divider/>
                            <Box>
                                <Flex justifyContent='space-around'>
                                <Text>
                                Total Monthly Rent
                                </Text>
                                 <Text>
                                 ₹2249/mo
                                 </Text>
                                </Flex>
                            </Box> 
                        </Flex>
                       </Box>  
                </Flex>
               <Box marginTop='5px'>
                 <Flex fontSize='10px'>
                    <span> <BsCalendar3/><Text  marginLeft='20px' marginTop='-12px'>Not to be paid now. Pay post usage every month.</Text></span>
                 </Flex>
               </Box>
            </Box>
        </>
    )
}