import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import primelogo from "../helpers/primelogo.png";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const CheckOutProduct = ({
  id,
  title,
  price,
  rating,
  category,
  description,
  image,
  hasPrime,
}) => {
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
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  return (
    <Box display={"grid"} gridColumnGap={5} gridRowGap={2} m={2}>
      <Img
        src={image}
        w={100}
        h={100}
        objectFit={"contain"}
        _hover={{ transform: "scale(1.03)", boxShadow: "sm" }}
      />

      <Box gridColumnStart={2} gridColumnEnd={4} mx={"auto"}>
        <Text as={"h3"} fontWeight={"semibold"}>
          {title}
        </Text>
        <Box display={"flex"}>
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <AiFillStar key={i} w={5} fill="orange" />
            ))}
        </Box>
        <Text fontSize={"xs"} my={2} noOfLines={2}>
          {description}
        </Text>
        <Flex
          alignItems={"center"}
          justifyContent={"flex-start"}
          mb={5}
          as={"b"}
        >
          <BsCurrencyRupee />
          <Text>{price}</Text>
        </Flex>
        {hasPrime && (
          <Flex mx={2} mb={2}>
            <Img loading="lazy" src={primelogo} w={10} h={5} />
            <Text fontSize={"xs"} color={"gray.500"} mx={2}>
              FREE Next-Day Delivery
            </Text>
          </Flex>
        )}
      </Box>
      <Flex gridColumnStart={5} alignItems={"center"} justifyContent={"center"}>
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
          Add To Basket
        </Button>
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
          Remove From Basket
        </Button>
      </Flex>
    </Box>
  );
};

export default CheckOutProduct;
