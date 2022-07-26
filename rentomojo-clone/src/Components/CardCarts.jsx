
import { Box, Button, Flex, Icon, Image, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {DeleteIcon,AddIcon,MinusIcon} from"@chakra-ui/icons"
import {BsPatchExclamation,BsTruck} from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { deletecartitemapi } from "../Redux/Cartapp/action";
export const CardCarts=({data})=>{

  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const handlecount = (value) => {
    if (value === "+" && count < 3) {
      setCount(count + 1);
    } else if (value === "-" && count > 1) {
      setCount(count - 1);
    }
  }

  const handledelete = (id) => {
    dispatch(deletecartitemapi(id))
  }

    return (
      <>
        <Box borderRadius="10px" height="230px" bg="#e2eaf0">
          <Box padding="20px" bg="white" borderRadius="10px">
            <Flex gap="15px">
              <Box width="30%" height="100px">
                <Image width="100%" height="100px" src={data.productimage} />
              </Box>

              <Box w="65%">
                <Flex alignItems="top">
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                    textAlign="left"
                    width="80%"
                    height="50px"
                  >
                    {data.title}
                  </Text>
                  <Icon
                    onClick={() => handledelete(data.id)}
                    w="20%"
                    fontSize="20px"
                    cursor="pointer"
                    as={DeleteIcon}
                  />
                </Flex>

                <Box marginTop="8px">
                  <Flex gap="50px">
                    <Box textAlign="left">
                      <Text fontSize="12px" color="gray.500">
                        Rent
                      </Text>
                      <Text fontSize="14px">₹{data.rent}/mo</Text>
                    </Box>
                    <Box textAlign="left">
                      <Text fontSize="12px" color="gray.500">
                        Deposit
                      </Text>
                      <Text fontSize="14px">₹{data.deposit}</Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Flex>
            <Box marginTop="20px">
              <Flex justifyContent="space-between" alignItems="center">
                <Box width="50%" border="1px solid silver">
                  <Flex gap="20%" justifyContent="center" alignItems="center">
                    <Button
                      _hover={{ bg: "white" }}
                      bg="white"
                      height="30px"
                      disabled={count === 1 ? true : false}
                      onClick={() => handlecount("-")}
                    >
                      {"-"}
                    </Button>
                    {count}
                    <Button
                      _hover={{ bg: "white" }}
                      height="30px"
                      bg="white"
                      disabled={count === 3 ? true : false}
                      onClick={() => handlecount("+")}
                    >
                      {"+"}
                    </Button>
                  </Flex>
                </Box>

                <Box>
                  <Select height="33px" border="1px solid silver" borderRadius="none">
                    <option value="option2">12 Months</option>
                    <option value="option3">6 Months</option>
                  </Select>
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box paddingLeft="20px" marginTop="8px">
            <Flex alignItems="center" gap="10px">
              <Icon as={TbTruckDelivery} />
              <Text> Delivery by 24th Jul 2022 </Text>
            </Flex>
          </Box>
        </Box>
      </>
    );
} 