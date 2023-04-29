import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import primelogo from "../helpers/primelogo.png";
const Max_Rating = 5;
const Min_rating = 1;
const ProductCard = ({ id, title, price, category, description, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (Max_Rating - Min_rating + 1) + Min_rating)
  );
  const [hasprime] = useState(Math.random() < 0.5);

  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexDir={"Column"}
      m={4}
      bg={"white"}
      zIndex={30}
      p={10}
      // w={{ base: "100%", md: 300 }}
      h={600}
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
      <Flex>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar key={i} w={5} fill="orange" />
          ))}
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
        mb={0}
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
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;
