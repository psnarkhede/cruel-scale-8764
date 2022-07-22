import React from "react";
import {Box, Flex,  Image, Text} from "@chakra-ui/react"
import {MdCheckCircle} from "react-icons/md"
import { useState } from "react";
import { CartPopover } from "./CartPopover";
export const CartHeader=()=>{
      const [isCheck] = useState(true)
    return (
        <Box 
        // border='1px solid teal'
        position='sticky'
        z-index='1'
        top='0px'
        //  bg='white'
         w='100%' h='75px' boxShadow='md' p='0 5' rounded='' bg='white'>
          {/* <Stack direction='row'> */}
            <Flex direction='row'  justifyContent='space-around'>
               <Box 
            //    border='1px solid red'
                w='20%' h='70px' p='0 20px'>
                 <Flex>
                    <Image src='https://imgs.search.brave.com/OB0gsW8kLE55wzM881HIkuMGB4U_iSX6UXI3VddIHrE/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9kMXFi/Mm5iNWN6bmF0dS5j/bG91ZGZyb250Lm5l/dC9zdGFydHVwcy9p/LzU1OTMxNS1mODUy/MDY3ZDQ1NjIyMTZk/MWExMTEyZTI2MjYw/YjM1Mi1tZWRpdW1f/anBnLmpwZz9idXN0/ZXI9MTQ3NTg0Mzg1/MQ' alt='rentomoj logo'
                      boxSize='80px'
                      objectfit='cover'
                      h='68px'
                    />
                    <Text fontSize={28} textAlign='center' as='' marginLeft='20px' p='10px 5px' fontWeight='medium' color='#718096' cursor='pointer' >
                        rentomojo
                    </Text>
                 </Flex>
               </Box >
               {/* select city option  */}
            
               <Box  
                border='1px solid red'
                 w='15%' h='70px'>
                  <Flex>
                     <CartPopover/>
                  </Flex> 
               </Box>
           
               {/* delivey option checked */}
            
               <Box 
            //    border='1px solid red'
                w='45%' h='70px'>
                <Flex direction='row'  justifyContent='space-around'>
                 <Box 
                //  border='1px solid red'
                  w='33%' h='70px'> 
                        
                    <Flex  justifyContent='space-around' p='18px 4px'  >
                        
                        <Text as={MdCheckCircle} color={isCheck ? "teal.300":'gray.500'} fontSize='25px' > </Text>
                        <Text textAlign='center' fontSize='18px' color={isCheck ? "teal.300":'gray.500'}>
                         Checkout
                        </Text>
                        <Box border={isCheck ?"2px solid #4FD1C5":'2px solid #718096'} w='50px' h='1px' marginTop='14px' ></Box>
                    
                    </Flex>
                </Box>
                <Box 
                // border='1px solid red'
                 w='33%' h='70px'>
                <Flex  justifyContent='space-around' p='18px 4px' >
                        
                        <Text as={MdCheckCircle} color='gray.500' fontSize='25px'> </Text>
                        <Text textAlign='center' fontSize='18px'>
                         Verification
                        </Text>
                        <Box border='2px solid #718096' w='50px' h='1px' marginTop='14px'></Box>
                    
                    </Flex>  
                </Box>
                <Box 
                // border='1px solid red'
                 w='33%' h='70px'>
                <Flex  justifyContent='space-around' p='18px 4px' >
                        
                        <Text as={MdCheckCircle} color='gray.500' fontSize='25px'> </Text>
                        <Text textAlign='center' fontSize='18px'>
                         Delivery
                        </Text>
                        <Box border='2px solid #718096' w='50px' h='1px' marginTop='14px'></Box>
                    
                    </Flex>   
                </Box>
                </Flex>
               </Box>
            </Flex>
          {/* </Stack> */}
        
        </Box>
    )
}