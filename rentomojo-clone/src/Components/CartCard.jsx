import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {BsPatchCheck} from "react-icons/bs"
import {AiOutlineRight} from "react-icons/ai"
import { CardCarts } from "./CardCarts";
export const CartCard=()=>{

    return (
        <Flex direction='column' border='1px solid teal'w='400px' px='10px' py='2px'  marginTop='130px' gap={3} justifyContent='space-around'>
             {/* have coupon code */}
            <Flex 
             direction='row'
             w='95%'
             h='50px'
             boxShadow='xs' p='' rounded='md' bg='white'
             justifyContent='space-around'
             alignItems='center'
            >
                <Box>
                 <BsPatchCheck  fontSize='25px'/>
                </Box>
                <Box marginLeft='-70px'>
                  <Text>
                   Have a coupon code?
                  </Text>
                </Box>
                <Box>
                 <AiOutlineRight fontSize='25px' cursor='pointer'/>
                </Box>
            </Flex>
            {/* cart Card start */}
            <Flex 
               direction='column'
               w='95%'
            //    h='190px'
               boxShadow='xs' p='' rounded='md' bg='white'
               justifyContent='space-around'
               alignItems='center'
            >
                {/* todo */}
                <CardCarts/>
            </Flex>

        </Flex>
    )
       
   
}



