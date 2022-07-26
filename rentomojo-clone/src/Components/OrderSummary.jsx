
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import{AiFillRightCircle} from "react-icons/ai"
import{GoLocation} from "react-icons/go" 
import React from "react";
import { OrderDetails } from "./OrederDetails";

export const OrderSummary=()=>{

    return (
        <Box
        //  border='1px solid teal'
         w='80%'height="590px" marginTop='60px' marginLeft='65px' boxShadow='xl' p='' rounded='md' bg='white'

        >
        <Flex direction='column' justifyContent='space-around' gap={3}>
            {/* Address delivery */}
            <Box 
             borderBottom='1px solid #CBD5E0'
             w='100%'
             h='175px'
             p='25px 5px'
            >
                <Flex direction='' justifyContent='space-between' fontSize='15px' p='15px 20px'>
                  <Box>
                     <Flex direction='column' justifyContent='space-around'>
                        <Box>
                            <Flex>
                              <GoLocation fontSize='15px'/> 
                              <Text>Delivery Address</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex>
                            <Text>5, Sector 14, Gurugram, Haryana , India - 122022</Text>
                            </Flex>
                        </Box>
                        
                        <Box >
                            <Flex direction='row'>
                                <Text>Change</Text>
                                <AiFillRightCircle fontSize='15px' color="#E53E3E" cursor='pointer' />
                            </Flex>
                        </Box>
                     </Flex>

                    </Box>
                  <Box>
                  <Flex>
                        <Image src='https://www.rentomojo.com/public/images/radical-cart/address__banner.svg' />
                     </Flex>
                  </Box>
                </Flex>
            </Box>
            {/* order summary */}
            <Box
            //   border='1px solid #CBD5E0'
              w='100%'
              h='310px'
              p='0px'
            >
                <Flex direction='row' justifyContent='space-around' gap={2}>
                    <OrderDetails/>
                </Flex>
            </Box>
        </Flex>

        </Box>
    )
}