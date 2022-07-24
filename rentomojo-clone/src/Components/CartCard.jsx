import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {BsPatchCheck} from "react-icons/bs"
import {AiOutlineRight} from "react-icons/ai"
import { CardCarts } from "./CardCarts";
import {useDispatch, useSelector} from "react-redux"
import { addCartItem } from "../Redux/Cartapp/action";
export const CartCard=()=>{

    const dispatch=useDispatch();
    const cartcard=useSelector((state)=>state.cartreducer.cartdata)

    useEffect(()=>{
        if(cartcard?.length===0){
            dispatch(addCartItem())
        }
    

    },[cartcard?.length, dispatch])

    // console.log("cart-",cartcard)
    return (
        <Flex direction='column' /*border='1px solid teal'*/w='400px' px='10px' py='2px'  marginTop='130px' gap={3} justifyContent='space-around'>
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
            {/* <Box */}
            {/* //    direction='column' */}
            {/* //    w='95%' */}
            {/* //    boxShadow='xs' p='' rounded='md' bg='white' */}
            {/* //    justifyContent='space-around' */}
            {/* //    alignItems='center' */}
            {/* //    gap={2} */}
            {/* > */}
                {cartcard?.length>0 && cartcard.map((item)=>(<CardCarts key={item.id} item={item} />))}
                
                
            {/* </Box> */}

        </Flex>
    )
       
   
}

