import { Box, Button, Flex, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { BsPatchExclamation, BsTruck } from "react-icons/bs";
export const CardCarts = () => {
  return (
    <>
      {/* card box first  */}
      <Box
        //  border='1px solid gray'
        w="95%"
        h="140px"
      >
        {/* inside box flex divide two pointer */}
        <Flex
          // border='1px solid gray'
          w="100%"
          h="135px"
          justifyContent="space-around"
          alignItems="center"
          gap={1}
          // px='5px'
          // py='5px'
        >
          {/* image box card */}
          <Box
            //    border='1px solid gray'
            w="30%"
            h="120px"
            //    px="10px"
            py="0px"
            alignItems="center"
          >
            {/* image box coming through api */}
            <Image
              borderRadius="5px"
              src="https://imgs.search.brave.com/4Hbo1VMepAMjNt4vk7IESJNCCUnQnZT_E1DFl_Aiwnc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/emZJdWxEVWhYcnB0/VWFJVWV3OGxRSGFF/OCZwaWQ9QXBp"
            />
          </Box>
          {/* title and product name  */}
          <Box
            //  border='1px solid gray'
            w="68%"
            h="140px"
          >
            <Flex
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              w="100%"
              h="140px"
              gap={1}
            >
              {/* name and delete item */}
              <Box
                //   border='1px solid gray'
                w="100%"
                h="68px"
              >
                {/* price tage & delete Button */}
                <Flex
                  justifyContent="space-around"
                  alignItems="center"
                  gap={0.5}
                  py="0px"
                >
                  {/* name */}
                  <Box>
                    <Text fontSize="13px">Poise Wooden King Bed (6x6)</Text>
                  </Box>
                  {/* delete */}
                  <Button variant="outline" border="none">
                    <DeleteIcon />
                  </Button>
                </Flex>
              </Box>
              {/* rent price deposit */}
              <Box
                //   border='1px solid gray'
                w="100%"
                h="68px"
              >
                <Flex
                  justifyContent="space-around"
                  alignItems="center"
                  gap={0.5}
                  py="0px"
                >
                  {/* rent amount */}
                  <Box>
                    <Flex direction="column" align="center">
                      <Text fontSize="14px" marginLeft="-29px">
                        Rent
                      </Text>
                      <Text>₹669/mo</Text>
                    </Flex>
                  </Box>
                  {/* deposit amount */}
                  <Box>
                    <Flex direction="column" align="center">
                      <Text fontSize="14px" marginLeft="-10px">
                        Deposit
                      </Text>
                      <Text>₹669/mo</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {/* increment box and total momeny */}
      <Box
        // border='1px solid gray'
        w="95%"
        h="40px"
      >
        {/* minus and plus */}
        <Flex
          //  border='1px solid gray'
          w="95%"
          h="40px"
          justifyContent="space-around"
          alignItems="center"
          gap={1}
        >
          {/* button add and button substract */}
          <Box border="1px solid #A0AEC0" borderRadius="5px" w="60%" h="40px">
            <Flex justifyContent="space-around" alignItems="center" gap={1}>
              <Button variant="outline" border="none">
                <MinusIcon color="#718096" />
              </Button>
              <Text>1</Text>
              <Button variant="outline" border="none" color="#718096">
                {" "}
                <AddIcon />
              </Button>
            </Flex>
          </Box>
          {/* month box */}
          <Box
            border="1px solid #A0AEC0"
            borderRadius="5px"
            alignItems="center"
            w="38%"
            h="40px"
          >
            <Select boxShadow="xs" p="" rounded="md" bg="white" border="none">
              <option value="12" bg="white" border="none">
                Month 12{" "}
              </option>
              {/* <Divider/> */}
              <option value="9" bg="white" border="none">
                Month 9
              </option>
              {/* <Divider/> */}
              <option value="3" bg="white" border="none">
                Month 3
              </option>
              {/* <Divider/> */}
            </Select>
          </Box>
        </Flex>
      </Box>
      <Box
        marginTop="25px"
        // border='1px solid gray'
        w="358px"
        h="40px"
        // marginLeft='-1px'
        borderRadius="5px"
        bg="#CBD5E0"
      >
        <Flex
          justifyContent="space-around"
          alignItems="center"
          gap={3}
          py="10px"
        >
          {/* delivery data */}
          <BsTruck />
          <Text marginLeft="-60px">Delivery by 25th Jul 2022</Text>
          <BsPatchExclamation />
        </Flex>
      </Box>
    </>
  );
};
