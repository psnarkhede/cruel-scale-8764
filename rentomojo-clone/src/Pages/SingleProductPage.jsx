import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useDisclosure,
  UnorderedList,
  ListItem,
  Textarea,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import styles from "../Components/Productpage.module.css";
import Productpageright from "../Components/Productpageright";
import Productsection from "../Components/Productsection";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletequestionapi,
  getquestionapi,
  postquestionapi,
} from "../Redux/Question/action";
import { useParams } from "react-router-dom";
import { getsingleproductapi } from "../Redux/Productapp/action";
import {
  addtolikeapi,
  getlikeitemapi,
  removefromlikeapi,
} from "../Redux/Likeapp/action";
import Packagespage from "../Components/Packagespage";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SingleProductPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [box1, setBox1] = useState(true);

  const [like, setLike] = useState(false);

  let { category, id } = useParams();

  const questionref = useRef();

  const dispatch = useDispatch();

  const { questions } = useSelector((state) => state.question);

  const [btnstatus, setBtnstatus] = useState(true);

  const { newproduct } = useSelector((state) => state.productsreducer);

  const { likeditems } = useSelector((state) => state.likereducer);

  const handlequestion = () => {
    let question = questionref.current.value;

    dispatch(postquestionapi(question));

    questionref.current.value = null;
  };

  useEffect(() => {
    dispatch(getquestionapi());
  }, []);

  const handledeletequestion = (id) => {
    dispatch(deletequestionapi(id));
  };

  useEffect(() => {
    dispatch(getsingleproductapi(category, id));
  }, [id]);

  useEffect(() => {
    dispatch(getlikeitemapi());
  }, []);

  useEffect(() => {
    if (likeditems.length > 0) {
      likeditems.map((el) => {
        if (el.id === `likeditem${id}`) {
          setLike(true);
        }
      });
    }
  }, [likeditems]);

  const handlelike = () => {
    let likedata = {};

    if (category !== "packages") {
      likedata = {
        id: `likeditem${newproduct.id}`,
        newid: newproduct.id,
        productimage: newproduct.productimage,
        title: newproduct.title,
        rent: newproduct.rent,
        deliverytime: newproduct.deliverytime,
        dimensions: newproduct.dimensions,
        producttype: newproduct.producttype,
        description: newproduct.description,
        features: newproduct.features,
        material: newproduct.material,
        color: newproduct.color,
        deposit: newproduct.deposit,
        category: category,
      };
    } else {
      likedata = {
        id: `likeditem${newproduct.id}`,
        newid: newproduct.id,
        productimage: newproduct.productimage,
        title: newproduct.title,
        rent: newproduct.rent,
        producttype: newproduct.producttype,
        deposit: newproduct.deposit,
        product: newproduct.product,
        roomtype: newproduct.roomtype,
        items: newproduct.items,
        category: category,
      };
    }

    if (likedata && !like) {
      dispatch(addtolikeapi(likedata));
    } else {
      dispatch(removefromlikeapi(likedata.id));
    }
  };

  return (
    <>
      <Navbar />
      <Box>
        <Flex>
          {/* Left Section */}
          <Box className={styles.leftdiv} width="65%" height="100vh">
            <Box>
              <Flex>
                <Image
                  width="100%"
                  height="80vh"
                  src={newproduct.productimage}
                />
                <Box
                marginLeft="-60px"
                  bg="white"
                  marginTop="20px"
                  width="35px"
                  height="35px"
                  borderRadius="50%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon
                    cursor="pointer"
                    onClick={() => (setLike(!like), handlelike())}
                    fontSize="22px"
                    as={like ? FcLike : AiOutlineHeart}
                  />
                </Box>
              </Flex>
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
                    <Text fontWeight="500">
                      Relocate for free when you move
                    </Text>
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
                      thorough quality-check for every product, so it reaches
                      you in a condition as good as new.
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
                    <Text fontWeight="500">
                      Easy returns, no questions asked
                    </Text>
                    <Text marginTop="5px" fontSize="14px" color="gray.500">
                      If you don't like the product you receive on delivery, you
                      can return it right away. We'll initiate the refund of
                      your deposit within 24 hours.
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
                      annual cleaning—free of cost, so you can sit back and
                      relax.
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
                    <Text fontWeight="500">
                      Keep upgrading to newer designs
                    </Text>
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
                    are the lease payments that you give monthly for usage of
                    the product for a stipulated time frame. It depends on
                    factors like market value of the product, tenure of service
                    and interest charged. <br />
                    Monthly Rentals are different from RMI as it also
                    incorporates over the top expenses like insurance,
                    maintenance costs etc over and above RMI costs per month.
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
                  <Text fontWeight="500">Why should I rent for 24 months?</Text>

                  <Text fontSize="14px" marginTop="5px" color="gray.500">
                    24 months is the most preferred tenure due to the following
                    reasons : possibility of shifting is high as an avg consumer
                    today shifts once in 2 years. Rentomojo saves you from this
                    burden by providing you free relocation within your city or
                    any of the major metro cities. Not just that! you get
                    options to upgrade or expand your rental collection anytime
                    at the touch of a button as well as an option to cancel your
                    subscription anytime as per your changing life priorities.
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
                    Will I be charged any fee if I return the product before my
                    minimum tenure ends?
                  </Text>

                  <Text fontSize="14px" marginTop="5px" color="gray.500">
                    We do charge a small early closure fee, which is generally a
                    multiple of your monthly rent as per your plan. To know more
                    about the early closure charges associated with your plan,
                    check out the Compare all tenures button.
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
                    its unfair to charge the same price across tenures as
                    consumers end up paying a lot more than whats fair in cases
                    of longer tenures. so to make it fair for someone who is
                    committing longer, we reduce rentals with tenure similarly
                    to how EMI reduces with tenure.
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
                  <Text fontWeight="500">Is relocation really free ?</Text>

                  <Text fontSize="14px" marginTop="5px" color="gray.500">
                    Intercity relocation and Intracity relocation comes free
                    with our service. We help you relocate to any cities we are
                    present in.
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
                  <Text fontWeight="500">Why do you guys take deposit ?</Text>

                  <Text fontSize="14px" marginTop="5px" color="gray.500">
                    We typically give you products worth a lot more than what we
                    ask for in return as monthly rentals. To safegaurd us with
                    risk of defaults or intential damage, we charge a nominal
                    deposit.
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
                    We take care of all manufacturing defects and minor wear and
                    tear. Not only that we end up waving damage upto ₹1000*
                  </Text>
                </Box>

                {questions
                  ? questions.map((el) => (
                      <Box
                        key={el.id}
                        textAlign="left"
                        borderBottom="1px solid silver"
                        width="90%"
                        margin="auto"
                        paddingTop="20px"
                        paddingBottom="20px"
                        className={styles.pardiv}
                      >
                        <Flex justifyContent="space-between">
                          <Text fontWeight="500">{el.data}</Text>

                          <Button
                            bg="white"
                            className={styles.delbtn}
                            display="none"
                            onClick={() => handledeletequestion(el.id)}
                          >
                            Delete
                          </Button>
                        </Flex>
                      </Box>
                    ))
                  : ""}

                <Box padding="40px">
                  <Flex alignItems="center">
                    <Text color="gray.500" fontSize="16px">
                      Have aquestion in mind?
                    </Text>
                    <Button
                      onClick={onOpen}
                      marginLeft="15px"
                      color="green.500"
                      border="1px solid green"
                      bg="white"
                      fontWeight="400"
                    >
                      Post a question
                    </Button>

                    <Modal isOpen={isOpen} size={"4xl"} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent padding="20px">
                        <ModalHeader fontSize="3xl">
                          Post a Question
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <UnorderedList color="gray.500">
                            <ListItem>
                              Be specific, ask questions only about the product.
                            </ListItem>
                            <ListItem>
                              Ensure you have gone through the product
                              specifications before posting your question.
                            </ListItem>
                            <ListItem>
                              Reach out to our customer care for queries related
                              to offers, orders, delivery etc.
                            </ListItem>
                          </UnorderedList>

                          <Textarea
                            ref={questionref}
                            marginTop="20px"
                            paddingTop="20px"
                            height="30vh"
                            fontSize="20px"
                            placeholder="Start typing here"
                          ></Textarea>

                          <Box marginTop="20px">
                            <Flex justifyContent="space-between">
                              <Box>
                                <Flex alignItems="center" gap="10px">
                                  <Text fontSize="14px" color="gray.500">
                                    Read our FAQs before you ask something
                                  </Text>
                                  <a href="https://rentomojodesk.freshdesk.com/support/home">
                                    <Button
                                      padding="0px 20px 0px 20px"
                                      height="30px"
                                      fontWeight="300"
                                      bg="white"
                                      border="1px solid #1dbdc0"
                                      color="#1dbdc0"
                                      borderRadius="none"
                                      _hover={{ color: "white", bg: "#1dbdc0" }}
                                    >
                                      FAQs
                                    </Button>
                                  </a>
                                </Flex>
                              </Box>

                              <Button
                                borderRadius="none"
                                height="30px"
                                fontWeight="300"
                                bg="#1dbdc0"
                                border="1px solid #1dbdc0"
                                color="white"
                                _hover={{ bg: "#1dbdc0" }}
                                onClick={handlequestion}
                              >
                                Submit
                              </Button>
                            </Flex>
                          </Box>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                  </Flex>
                </Box>
              </Box>
            </Box>

            <Box hidden={box1 ? false : true}>
              {category !== "packages" ? <Productsection /> : <Packagespage />}
            </Box>

            <br />
            <br />
            <br />
            <br />
            <br />
          </Box>

          {/* Right Section */}
          <Box width="35%" height="100vh">
            <Productpageright data={newproduct} category={category} />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default SingleProductPage;
