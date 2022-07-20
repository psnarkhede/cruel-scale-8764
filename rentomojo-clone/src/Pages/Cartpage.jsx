import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { CartHeader } from '../Components/CartHeader'

const Cartpage = () => {
  return (
    <Box border='2px solid #1A202C' w='100%' h='100vh' bg='#EDF2F7'>
      <Stack direction='column'>
        <Flex direction='column'>
           <Box>
             <CartHeader/>
           </Box>
           <Box>
             {/* <CartHeader/> */}
           </Box>
        </Flex> 
      </Stack>
    </Box>
  )
}

export default Cartpage