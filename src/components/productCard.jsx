import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import primelogo from "../helpers/primelogo.png";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const Max_Rating = 5;
const Min_rating = 1;
const ProductCard = ({ id, title, price, category, description, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (Max_Rating - Min_rating + 1) + Min_rating)
  );
  const [hasprime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      rating,
      description,
      image,
      hasprime,
    };
    dispatch(addToBasket(product));
  };
  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexDir={"Column"}
      mx={{ base: 0, sm: 4 }}
      my={4}
      bg={"white"}
      zIndex={30}
      p={{ base: 0, sm: 10 }}
      h={{ base: 450, sm: 600 }}
      borderRadius={2}
    >
      <Text
        position={"absolute"}
        top={2}
        right={2}
        size={"xs"}
        fontStyle={"italic"}
        color={"gray.400"}
      >
        {category}
      </Text>
      <Img
        src={image}
        w={200}
        h={200}
        objectFit={"contain"}
        _hover={{ transform: "scale(1.03)", boxShadow: "sm" }}
      />
      <Text as={"b"} my={3}>
        {title}
      </Text>
      <Flex alignItems={"center"}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar key={i} w={5} fill="orange" />
          ))}
        <Text fontSize={"sm"}>
          {rating === 5
            ? Number(rating - Math.random()).toFixed(2)
            : Number(rating + Math.random()).toFixed(2)}
        </Text>
      </Flex>
      <Text size={"xs"} my={2} noOfLines={2}>
        {description}
      </Text>
      <Flex alignItems={"center"} justifyContent={"flex-start"} mb={5} as={"b"}>
        <BsCurrencyRupee />
        <Text>{price}</Text>
      </Flex>
      {hasprime && (
        <Flex mx={2} mb={2}>
          <Img src={primelogo} w={10} h={5} />
          <Text fontSize={"xs"} color={"gray.500"} mx={2}>
            FREE Next-Day Delivery
          </Text>
        </Flex>
      )}
      <Button
        mt={"auto"}
        mb={2}
        size={{ base: "xs", md: "sm" }}
        fontStyle={"bold"}
        bgGradient={"linear(to-b,yellow.200,yellow.400)"}
        border={"yellow.300"}
        _hover={{
          transform: "scale(1.02)",
          outline: "none",
          ring: 1,
          ringColor: "yellow.200",
        }}
        boxShadow={"md"}
        _active={{ bgGradient: "linear(to-b,yellow.600,yellow.400)" }}
        onClick={addItemToBasket}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;
