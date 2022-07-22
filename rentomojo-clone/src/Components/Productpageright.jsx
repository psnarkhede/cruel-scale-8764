import { Box, Button, Flex, Icon, Image, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaChevronCircleRight, FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";

const Productpageright = ({data}) => {

  {/* Today */}

  const [viewcartoption, setViewcartoption] = useState(false)

  return (
    <Box>
      <Text textAlign="left" padding="15px 0px 15px 5%" fontWeight="500">
        {data.title}
      </Text>

      <Box bg="gray.100" padding="10px 10px" width="100%">
        <Flex alignItems="center" gap="20px">
          <Text fontSize="13px" paddingLeft="3%">
            How long do you want to rent this for?(Months)
          </Text>
          <Popover>
            <PopoverTrigger>
              <Icon color="green" cursor="pointer" as={AiOutlineInfoCircle} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody
                borderRadius="8px"
                textAlign="left"
                fontSize="14px"
                bg="black"
                color="white"
              >
                Longer tenures have lower monthly rent.
                <br />
                <br />
                At the end of your minimum rental period, you can keep renting
                for the same price for as long as you want.
                <br />
                <br />
                In case you return the item before the chosen tenure is over,
                you will be asked to pay a minimal early closure charges.
                <br />
                <br />
                To know more, click on the Compare all tenures button.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>

      {/* Cost box */}

      <Box width="85%" margin="auto" border="1px solid silver" marginTop="30px">
        <Flex>
          <Box
            width="50%"
            borderBottom="1px solid silver"
            padding="10px 0px 10px 5%"
          >
            <Flex alignItems="baseline">
              <Icon as={BiRupee} />
              <Text fontSize="22px">{data.rent}</Text>
              <Text>/ mo</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">
              <Text color="gray.500" fontSize="12px">
                Monthly Rent
              </Text>

              <Popover placement="top">
                <PopoverTrigger>
                  <Icon
                    fontSize="12px"
                    color="green"
                    cursor="pointer"
                    as={AiOutlineInfoCircle}
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody
                    borderRadius="8px"
                    textAlign="left"
                    fontSize="14px"
                    bg="black"
                    color="white"
                  >
                    Monthly rent you will pay at the end of each month of your
                    plan. Your invoice is generated on the 1st of every month,
                    postpaid.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>

          <Box
            width="50%"
            borderBottom="1px solid silver"
            borderLeft="1px solid silver"
            padding="10px 0px 10px 5%"
          >
            <Flex alignItems="baseline">
              <Icon as={BiRupee} />
              <Text fontSize="22px">{data.deposit}</Text>
              <Text>/ mo</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">
              <Text color="gray.500" fontSize="12px">
                Refundable Deposit
              </Text>
              <Popover placement="top">
                <PopoverTrigger>
                  <Icon
                    fontSize="12px"
                    color="green"
                    cursor="pointer"
                    as={AiOutlineInfoCircle}
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody
                    borderRadius="8px"
                    textAlign="left"
                    fontSize="14px"
                    bg="black"
                    color="white"
                  >
                    One-time deposit amount collected to start your rental plan.
                    100% Refundable as soon as you end your subscription.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>
        </Flex>

        <Box paddingTop="10px" paddingBottom="10px">
          <Flex justifyContent="center">
            <Box width="25%">
              <Text fontSize="10px" color="gray.500">
                <Icon
                  color="black"
                  fontSize="10px"
                  marginTop="4px"
                  marginRight="5px"
                  as={FaChevronCircleRight}
                />
                7 Days free trial
              </Text>
            </Box>

            <Box width="25%">
              <Text fontSize="10px" color="gray.500">
                <Icon
                  color="black"
                  fontSize="10px"
                  marginTop="4px"
                  marginRight="5px"
                  as={FaChevronCircleRight}
                />
                Free relocations
              </Text>
            </Box>

            <Box width="25%">
              <Text fontSize="10px" color="gray.500">
                <Icon
                  color="black"
                  fontSize="10px"
                  marginTop="4px"
                  marginRight="5px"
                  as={FaChevronCircleRight}
                />
                Free Upgrades
              </Text>
            </Box>

            <Box width="15%">
              <Text fontSize="12px" color="green" cursor="pointer">
                View All
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Button
        marginTop="20px"
        fontWeight="300"
        bg="white"
        color="green"
        border="1px solid green"
        padding="0px 23% 0px 23%"
        _hover={{ bg: "white" }}
      >
        Compare All Tenures
      </Button>

      <Text textAlign="left" paddingLeft="8%" marginTop="20px" fontSize="14px">
        {" "}
        <Icon marginRight="20px" as={TbTruckDelivery} /> Delivery by 34th Jul
        2022{" "}
      </Text>

      <Box
        hidden={!viewcartoption ? false : true}
        onClick={() => setViewcartoption(!viewcartoption)}
      >
        <Button
          marginTop="5px"
          fontWeight="300"
          bg="red"
          color="white"
          border="1px solid red"
          padding="0px 24% 0px 24%"
          _hover={{ bg: "red" }}
        >
          <Icon marginRight="10px" as={FaShoppingCart} />
          Book Your Plan
        </Button>
      </Box>

      <Box
        marginTop="5px"
        hidden={viewcartoption ? false : true}
        onClick={() => setViewcartoption(!viewcartoption)}
      >
        <Flex gap="10px" justifyContent="center">
          <Link to="/">
            {" "}
            <Button color="white" bg="red" _hover={{ bg: "red" }}>
              Browse More
            </Button>
          </Link>

          <Link to="/cart">
            {" "}
            <Button color="white" bg="red" _hover={{ bg: "red" }}>
              <Icon marginRight="10px" as={FaShoppingCart} />
              View Cart
            </Button>
          </Link>
        </Flex>
      </Box>

      <Text textAlign="left" paddingLeft="8%" marginTop="30px" fontSize="14px">
        Special Offers
      </Text>

      <Box
        border="1px dashed black"
        width="85%"
        margin="auto"
        marginTop="10px"
        padding="5px 0px 5px 0px"
      >
        <Flex gap="5px" justifyContent="center" alignItems="center">
          <Image
            width="25px"
            height="25px"
            src="https://www.rentomojo.com/public/images/product/special-offer.svg"
          />

          <Box textAlign="left" fontSize="12px">
            <Text>
              Use Code <span style={{ fontWeight: "500" }}>CITY15</span>
            </Text>
            <Text>Flat 15% off on third Month invoice</Text>
            <Text fontWeight="500" color="green">
              Read More
            </Text>
            <Text color="red">Applicable to New Users</Text>
          </Box>

          <Button
            _hover={{ bg: "white" }}
            fontSize="14px"
            color="green"
            bg="white"
            border="1px solid green"
          >
            Copy
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Productpageright