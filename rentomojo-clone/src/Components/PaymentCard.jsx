import React, { useRef, useState } from "react";
 import{Box, Button, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Text, useDisclosure} from "@chakra-ui/react"
export const PaymentCard =()=>{
    // const [size,setSize] =useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
           <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Choose payment mode</DrawerHeader>
        <DrawerBody>
            {/* main box start */}
            <Box
            //   border='1px solid teal'
              w='100%'
              h='550px'
              borderRadius='30px'
              bg='#E2E8F0'
            >
            {/* first flex start  */}
            <Flex
                border='1px solid teal'
                w='100%'
                h='550px'
                borderRadius='30px'
                justifyContent='space-around'
                alignItems='center'
            >
                {/* first box start total amount and checkbox */}
              <Box
               border='1px solid red'
               w='100%'
               h='100px'
               px='20px'
               py='10px'
              >
                <Flex 
                  direction='column'
                >
                   <Text>Total Amount Payable</Text>
                   <Heading fontSize='19px' fontWeight='medium'>₹2974</Heading>
                   {/* checkbox and term start */}
                   <Box>
                       <Flex
                        marginTop='15px'
                       >
                         <Checkbox colorScheme='teal' defaultChecked/>
                         <Text color='#A0AEC0' marginLeft='10px'>I hereby agree to RentoMojo</Text>
                         <Text marginLeft='5px' color='#4FD1C5'>terms and conditions. </Text>
                       </Flex>
                   </Box>
                   {/* checkbox and term end */}
                </Flex>
              </Box>
             {/* first box end total amount and checkbox */}
               
            </Flex>
            {/* first flex end */}
            </Box>
            {/* main box end */}

        </DrawerBody>
        </DrawerContent>
      </Drawer>
            
        </>
    )
}

/*
 <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
 
        </DrawerFooter> 
*/