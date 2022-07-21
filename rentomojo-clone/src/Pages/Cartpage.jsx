
import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { Addons } from '../Components/Addons'
import { CartHeader } from '../Components/CartHeader'
import { OrderSummary } from '../Components/OrderSummary'

const Cartpage = () => {
  return (
    <Box border='2px solid #1A202C' w='100%'  bg='#EDF2F7'>
      <Stack direction='column'>
        <Flex direction='column' >
           <Box>
             <CartHeader/>
             <Addons/>
             <OrderSummary/>
           </Box>
           <Box>
             {/* <Cart card/> */}
           </Box>
        </Flex> 
      </Stack>
    </Box>
  )
}


export default Cartpage;
