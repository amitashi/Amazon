import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";
import Header from "./header";
import { useSelector } from "react-redux";
import CheckOutProduct from "./checkOutProduct";

const Checkout = () => {
  const cartItems = useSelector((state) => state.basket.items);

  return (
    <Box bgColor={"gray.100"}>
      <Header />

      <Box
        display={{ base: "inline-block", lg: "flex" }}
        maxWidth={"screen"}
        mx={"auto"}
      >
        <Box flexGrow={1} m={5} shadow={"sm"}>
          <Img
            src="https://links.papareact.com/ikj"
            width={"60rem"}
            height={{ base: "10rem", md: "15rem" }}
            objectFit={"contain"}
          />
          <Box
            display={"flex"}
            flexDir={"column"}
            p={2}
            ml={{ base: 0, lg: 2 }}
            bg={"white"}
          >
            <Text as={"h1"} my={2} fontWeight={"semibold"} fontSize={"lg"}>
              {cartItems.length === 0 ? "Your Cart is Empty" : "Shopping Cart"}
            </Text>
            {cartItems.map((item, i) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasprime}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
