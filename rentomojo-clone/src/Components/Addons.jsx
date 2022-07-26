
import { Avatar, AvatarGroup, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {MdCheckCircle} from "react-icons/md";
import {Link} from "react-router-dom"
export const Addons =()=>{

    return (
      <Box
        // border='1px solid teal'
        w="80%"
        h="135px"
        marginTop="130px"
        marginLeft="65px"
        boxShadow="xl"
        p=""
        rounded="md"
        bg="white"
      >
        <Flex direction="row" justifyContent="space-around">
          <Box
            // border='1px solid red'
            w="35%"
            h="135px"
          >
            <Flex direction="column" justifyContent="space-around" gap={1}>
              <Box
                //  border='1px solid teal'
                w="100%"
                h="30px"
              >
                <Flex>
                  <Text p="4px 0">Suggestion Addons</Text>
                </Flex>
              </Box>
              <Box
                //  border='1px solid teal'
                w="100%"
                h="100px"
              >
                <AvatarGroup size="lg" max={3} p="20px 0px">
                  <Avatar
                    name="Waston wood"
                    src="https://cdn.livingstyles.com.au/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/M/2/M20.jpg"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://imgs.search.brave.com/Vlp66qTm6erCycUlrZ7v5GvfPzWeJon7EEIHOvpe15o/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/QUFRY0JPenRfZjNX/SFdiaXVRczJnSGFG/aiZwaWQ9QXBp"
                  />
                  <Avatar
                    name="Matters"
                    src="https://imgs.search.brave.com/4Hbo1VMepAMjNt4vk7IESJNCCUnQnZT_E1DFl_Aiwnc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/emZJdWxEVWhYcnB0/VWFJVWV3OGxRSGFF/OCZwaWQ9QXBp"
                  />
                  <Avatar
                    name="matters"
                    src="https://imgs.search.brave.com/4Hbo1VMepAMjNt4vk7IESJNCCUnQnZT_E1DFl_Aiwnc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/emZJdWxEVWhYcnB0/VWFJVWV3OGxRSGFF/OCZwaWQ9QXBp"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://imgs.search.brave.com/S3Vd884NNVF_2bpRiDtA_lD1OudvijXSb0glgxcB9KU/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UDUwRGlNeDZxak16/Z2hZOUViMUpBSGFK/NCZwaWQ9QXBp"
                  />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://imgs.search.brave.com/S3Vd884NNVF_2bpRiDtA_lD1OudvijXSb0glgxcB9KU/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UDUwRGlNeDZxak16/Z2hZOUViMUpBSGFK/NCZwaWQ9QXBp"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://imgs.search.brave.com/S3Vd884NNVF_2bpRiDtA_lD1OudvijXSb0glgxcB9KU/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UDUwRGlNeDZxak16/Z2hZOUViMUpBSGFK/NCZwaWQ9QXBp"
                  />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://imgs.search.brave.com/4Hbo1VMepAMjNt4vk7IESJNCCUnQnZT_E1DFl_Aiwnc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/emZJdWxEVWhYcnB0/VWFJVWV3OGxRSGFF/OCZwaWQ9QXBp"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://imgs.search.brave.com/4Hbo1VMepAMjNt4vk7IESJNCCUnQnZT_E1DFl_Aiwnc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/emZJdWxEVWhYcnB0/VWFJVWV3OGxRSGFF/OCZwaWQ9QXBp"
                  />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://imgs.search.brave.com/4Hbo1VMepAMjNt4vk7IESJNCCUnQnZT_E1DFl_Aiwnc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/emZJdWxEVWhYcnB0/VWFJVWV3OGxRSGFF/OCZwaWQ9QXBp"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://imgs.search.brave.com/4Hbo1VMepAMjNt4vk7IESJNCCUnQnZT_E1DFl_Aiwnc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/emZJdWxEVWhYcnB0/VWFJVWV3OGxRSGFF/OCZwaWQ9QXBp"
                  />
                </AvatarGroup>
              </Box>
            </Flex>
          </Box>
          {/* second box */}
          <Box
            //    border='1px solid red'
            w="28%"
            h="135px"
          >
            <Flex direction="column" gap={4}>
              <Box>
                <Flex direction="row" p="9px 0">
                  <MdCheckCircle color="#E53E3E" fontSize="22px" p="0px 0" />
                  <Text textAlign="center" marginLeft="8px" fontSize="13px">
                    {" "}
                    1 of 12 Add
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex>
                  <Text textAlign="center" fontSize="13px" lineHeight={1}>
                    These addons are curated to give the best experience with
                    the products in your cart.
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
          {/* third */}
          <Box
            //  border='1px solid red'
            w="30%"
            h="135px"
          >
            <Flex
              direction="column"
              justifyContent="space-around"
              gap={10}
              p="8px 0"
            >
              <Box>
                <Flex
                  direction="column"
                  justifyContent="space-around"
                  marginLeft="135px"
                >
                  <Heading fontSize="15px" fontWeight="medium">
                    ₹179/mo
                  </Heading>
                  <Text>Addons Rent</Text>
                </Flex>
              </Box>
              <Box marginLeft="40px">
                <Flex>
                  <Link to="/">
                    {" "}
                    <Button colorScheme="red">Choose&Add</Button>{" "}
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    );
}