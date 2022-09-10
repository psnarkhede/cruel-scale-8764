import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Img,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  addtolikeapi,
  getlikeitemapi,
  removefromlikeapi,
} from "../Redux/Likeapp/action";

const SingleProduct = ({
  productimage,
  title,
  rent,
  deposit,
  deliverytime,
  producttype,
  description,
  dimensions,
  features,
  material,
  product,
  roomtype,
  items,
  color,
  id,
  category,
}) => {
  const [like, setLike] = useState(false);


  {/******************** */}

   const dispatch = useDispatch();

   const { likeditems } = useSelector((state) => state.likereducer);

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
          id: `likeditem${id}`,
          newid: id,
          productimage: productimage,
          title: title,
          rent: rent,
          deliverytime: deliverytime,
          dimensions: dimensions,
          producttype: producttype,
          description: description,
          features: features,
          material: material,
          color: color,
          deposit: deposit,
          category: category,
        };
      } else {
        likedata = {
          id: `likeditem${id}`,
          newid: id,
          productimage: productimage,
          title: title,
          rent: rent,
          producttype: producttype,
          deposit: deposit,
          product: product,
          roomtype: roomtype,
          items: items,
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
    <Box
      border="1px solid gray;"
      height="420px"
      width="100%"
      borderRadius="3px"
    >
      <Box
        // marginLeft="40%"
        marginLeft="220px"
        bg="white"
        marginTop="12px"
        width="35px"
        height="35px"
        zIndex="1"
        position="absolute"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Icon
          onClick={() => (setLike(!like), handlelike())}
          fontSize="22px"
          as={like ? FcLike : AiOutlineHeart}
        />
      </Box>
      <Img src={productimage} height="240px"></Img>
      <Text
        fontFamily="Muli,sans-serif"
        fontSize="15px"
        textAlign="center"
        marginTop="3px"
      >
        {title}
      </Text>
      <Divider
        width="85%"
        marginTop="10px"
        paddingTop="12px"
        //paddingBottom="-5px"
        margin="auto"
      />
      <Box marginTop="16px">
        <Flex justifyContent="space-evenly">
          <Text fontFamily="Muli,sans-serif" fontSize="15px" color="grey">
            {" "}
            ₹{rent}/mo
          </Text>

          <Text fontFamily="Muli,sans-serif" fontSize="15px" color="grey">
            5 days
          </Text>
        </Flex>
      </Box>
      <Link to={`/product/${category}/${id}`}>
        <Button
          marginTop="34px"
          color="blue"
          borderRadius="25px"
          bg="white"
          fontSize="13px"
          border="1px solid blue"
          width="200px"
          marginLeft="13%"
        >
          Quick View
        </Button>
      </Link>
    </Box>
  );
};

export default SingleProduct;
