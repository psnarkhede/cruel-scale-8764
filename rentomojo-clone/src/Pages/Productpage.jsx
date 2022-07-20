import React, { useState } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const Productpage = () => {
  const [box1, setBox1] = useState(true);

  const [like, setLike] = useState(false);

  return (
    <Box>
      <Flex>
        {/* Left Section */}
        <Box border="1px solid red" width="65%">
          <Box bg="white">
            <Box
              marginLeft="60%"
              bg="white"
              marginTop="20px"
              width="35px"
              height="35px"
              zIndex="1"
              position="absolute"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon onClick={() => setLike(!like)}  fontSize="22px" as={like ? FcLike : AiOutlineHeart} />
            </Box>
            <Image src="https://p.rmjo.in/moodShot/ky3xx53f-1024x512.jpg" />
          </Box>

          <Flex>
            <Box
              bg={box1 ? "gray.100" : "white"}
              borderTop={!box1 ? "2px solid #dc3226" : ""}
              onClick={() => setBox1(false)}
              textAlign="left"
              fontSize="20px"
              padding="10px 0px 10px 20px"
              width="50%"
            >
              <Text>Why rent from us?</Text>
            </Box>
            <Box
              bg={!box1 ? "gray.100" : "white"}
              borderTop={box1 ? "2px solid #dc3226" : ""}
              onClick={() => setBox1(true)}
              textAlign="left"
              fontSize="20px"
              padding="10px 0px 10px 20px"
              width="50%"
            >
              <Text>Product Details</Text>
            </Box>
          </Flex>

          {/* why rent from us? */}

          <Box hidden={!box1 ? false : true}>
            <Box marginTop="20px">
              <Flex>
                <Box paddingLeft="30px" textAlign="left" width="50%">
                  <Text fontSize="24px">Relocate for free when you move</Text>
                  <Text marginTop="10px" color="gray.500">
                    Changing your house or even your city? We'll relocate your
                    rentals for free within the city or to any of our 8
                    operational cities!
                  </Text>
                </Box>
                <Box width="40%">
                  <Image
                    width="100%"
                    src="https://www.rentomojo.com/public/images/product/app-benefits/product.png"
                  />
                </Box>
              </Flex>
            </Box>

            <Box
              paddingTop="20px"
              paddingBlock="20px"
              width="90%"
              margin="auto"
              marginTop="30px"
              borderTop="1px solid silver"
              borderBottom="1px solid silver"
            >
              <Flex>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="15%"
                >
                  <Image
                    width="60%"
                    height="60px"
                    src="https://www.rentomojo.com/public/images/product/app-benefits/icons/common/relocation.svg"
                  />
                </Box>
                <Box paddingLeft="10px" textAlign="left">
                  <Text fontWeight="500">Relocate for free when you move</Text>
                  <Text marginTop="5px" fontSize="14px" color="gray.500">
                    Changing your house or even your city? We'll relocate your
                    rentals for free within the city or to any of our eight
                    operational cities!
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              paddingTop="20px"
              paddingBlock="20px"
              width="90%"
              margin="auto"
              borderBottom="1px solid silver"
            >
              <Flex>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="15%"
                >
                  <Image
                    width="60%"
                    height="60px"
                    src="https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/1.png"
                  />
                </Box>
                <Box paddingLeft="10px" textAlign="left">
                  <Text fontWeight="500">Furniture as good as new</Text>
                  <Text marginTop="5px" fontSize="14px" color="gray.500">
                    Quality matters to you, and us! That's why our team does a
                    thorough quality-check for every product, so it reaches you
                    in a condition as good as new.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              paddingTop="20px"
              paddingBlock="20px"
              width="90%"
              margin="auto"
              borderBottom="1px solid silver"
            >
              <Flex>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="15%"
                >
                  <Image
                    width="60%"
                    height="60px"
                    src="https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/2.png"
                  />
                </Box>
                <Box paddingLeft="10px" textAlign="left">
                  <Text fontWeight="500">Easy returns, no questions asked</Text>
                  <Text marginTop="5px" fontSize="14px" color="gray.500">
                    If you don't like the product you receive on delivery, you
                    can return it right away. We'll initiate the refund of your
                    deposit within 24 hours.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              paddingTop="20px"
              paddingBlock="20px"
              width="90%"
              margin="auto"
              borderBottom="1px solid silver"
            >
              <Flex>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="15%"
                >
                  <Image
                    width="60%"
                    height="60px"
                    src="https://www.rentomojo.com/public/images/product/app-benefits/icons/common/1.png"
                  />
                </Box>
                <Box paddingLeft="10px" textAlign="left">
                  <Text fontWeight="500">
                    Free maintenance and annual cleaning
                  </Text>
                  <Text marginTop="5px" fontSize="14px" color="gray.500">
                    We offer maintenance for your product after 12 months and
                    annual cleaning—free of cost, so you can sit back and relax.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              paddingTop="20px"
              paddingBlock="20px"
              width="90%"
              margin="auto"
              borderBottom="1px solid silver"
            >
              <Flex>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="15%"
                >
                  <Image
                    width="60%"
                    height="60px"
                    src="https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/5.png"
                  />
                </Box>
                <Box paddingLeft="10px" textAlign="left">
                  <Text fontWeight="500">Keep upgrading to newer designs</Text>
                  <Text marginTop="5px" fontSize="14px" color="gray.500">
                    Bored of the same product and style? Just upgrade after 12
                    months to try another design and enjoy the change!
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Text
              fontSize="24px"
              textAlign="left"
              marginTop="30px"
              paddingLeft="40px"
              fontweight="500"
            >
              Question and Answer
            </Text>
            <Box
              bgColor="#dc3226"
              height="2px"
              width="6%"
              marginLeft="45px"
              marginTop="10px"
            />

            <Box
              width="90%"
              border="1px solid silver"
              margin="auto"
              marginTop="30px"
            >
              <Box
                textAlign="left"
                borderBottom="1px solid silver"
                width="90%"
                margin="auto"
                paddingTop="20px"
                paddingBottom="20px"
              >
                <Text fontWeight="500">
                  What is RMI ? How is it different from monthly rentals I pay
                  to Rentomojo ?
                </Text>

                <Text fontSize="14px" marginTop="5px">
                  RMI is a short form for Rentomojo Monthly Installments which
                  are the lease payments that you give monthly for usage of the
                  product for a stipulated time frame. It depends on factors
                  like market value of the product, tenure of service and
                  interest charged. <br />
                  Monthly Rentals are different from RMI as it also incorporates
                  over the top expenses like insurance, maintenance costs etc
                  over and above RMI costs per month.
                  <br />
                  Monthly Rental = RMI + Insurance costs / month + Maintenance
                  Costs / Month
                </Text>
              </Box>

              <Box
                textAlign="left"
                borderBottom="1px solid silver"
                width="90%"
                margin="auto"
                paddingTop="20px"
                paddingBottom="20px"
              >
                <Text fontWeight="500">
                Why should I rent for 24 months?
                </Text>

                <Text fontSize="14px" marginTop="5px" color="gray.500">
                24 months is the most preferred tenure due to the following reasons : possibility of shifting is high as an avg consumer today shifts once in 2 years. Rentomojo saves you from this burden by providing you free relocation within your city or any of the major metro cities. Not just that! you get options to upgrade or expand your rental collection anytime at the touch of a button as well as an option to cancel your subscription anytime as per your changing life priorities.
                </Text>
              </Box>

              <Box
                textAlign="left"
                borderBottom="1px solid silver"
                width="90%"
                margin="auto"
                paddingTop="20px"
                paddingBottom="20px"
              >
                <Text fontWeight="500">
                Will I be charged any fee if I return the product before my minimum tenure ends?
                </Text>

                <Text fontSize="14px" marginTop="5px" color="gray.500">
                We do charge a small early closure fee, which is generally a multiple of your monthly rent as per your plan. To know more about the early closure charges associated with your plan, check out the Compare all tenures button.
                </Text>
              </Box>

              <Box
                textAlign="left"
                borderBottom="1px solid silver"
                width="90%"
                margin="auto"
                paddingTop="20px"
                paddingBottom="20px"
              >
                <Text fontWeight="500">
                Why are rentals changing with tenure ?
                </Text>

                <Text fontSize="14px" marginTop="5px" color="gray.500">
                its unfair to charge the same price across tenures as consumers end up paying a lot more than whats fair in cases of longer tenures. so to make it fair for someone who is committing longer, we reduce rentals with tenure similarly to how EMI reduces with tenure.
                </Text>
              </Box>

              <Box
                textAlign="left"
                borderBottom="1px solid silver"
                width="90%"
                margin="auto"
                paddingTop="20px"
                paddingBottom="20px"
              >
                <Text fontWeight="500">
                Is relocation really free ?
                </Text>

                <Text fontSize="14px" marginTop="5px" color="gray.500">
                Intercity relocation and Intracity relocation comes free with our service. We help you relocate to any cities we are present in.
                </Text>
              </Box>

              <Box
                textAlign="left"
                borderBottom="1px solid silver"
                width="90%"
                margin="auto"
                paddingTop="20px"
                paddingBottom="20px"
              >
                <Text fontWeight="500">
                Why do you guys take deposit ?
                </Text>

                <Text fontSize="14px" marginTop="5px" color="gray.500">
                We typically give you products worth a lot more than what we ask for in return as monthly rentals. To safegaurd us with risk of defaults or intential damage, we charge a nominal deposit.
                </Text>
              </Box>

              <Box
                textAlign="left"
                borderBottom="1px solid silver"
                width="90%"
                margin="auto"
                paddingTop="20px"
                paddingBottom="20px"
              >
                <Text fontWeight="500">
                What all do you cover in free maintenance ?
                </Text>

                <Text fontSize="14px" marginTop="5px" color="gray.500">
                We take care of all manufacturing defects and minor wear and tear. Not only that we end up waving damage upto ₹1000*
                </Text>
              </Box>

                <Box padding="40px">
                    <Flex alignItems="center">
                    <Text color="gray.500" fontSize="16px" >Have aquestion in mind?</Text>
                    <Button marginLeft="15px" color="green.500" border="1px solid green" bg="white" fontWeight="400" >Post a question</Button>
                    </Flex>
                </Box>
              
            </Box>
          </Box>

          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>

        {/* Right Section */}
        <Box border="1px solid red" width="35%" height="100vh"></Box>
      </Flex>
    </Box>
  );
};

export default Productpage;

