import { Box, Flex, Img, Input, Text } from "@chakra-ui/react";
import React from "react";
import amazonicon from "../helpers/logo-amazon.svg";
import serachicon from "../helpers/magnifying-glass-solid.svg";
import carticon from "../helpers/cart-shopping-solid.svg";
import homeicon from "../helpers/bars-solid.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const naviate = useNavigate();
  const cartItems = useSelector((state) => state.basket.items);

  const naviagatetocheckout = () => {
    naviate("/checkout");
  };
  console.log(cartItems);
  return (
    <>
      {/* // top logo bg="#232F3E"*/}
      <Flex flexGrow={1} p={1} alignItems={"center"} bg="#131921" w={"100%"}>
        <Flex
          mx={1}
          flexGrow={{ base: 1, sm: 0 }}
          alignItems={"center"}
          justifyContent={"center"}
          p={1}
          m={0}
        >
          <Link to="/">
            <Img
              fill={"whiteAlpha.100"}
              src={amazonicon}
              alt="icon"
              width={"5rem"}
              height={"3rem"}
              objectFit={"contain"}
              cursor={"pointer"}
            />
          </Link>
        </Flex>
        {/* {search} */}
        <Flex
          display={{ base: "none", sm: "flex" }}
          alignItems={"center"}
          bg={"yellow.400"}
          _hover={{
            bg: "yellow.500",
          }}
          mx={2}
          borderRadius={"0.4rem"}
          flexGrow={1}
          cursor={"pointer"}
          flexShrink={1}
        >
          <Input
            bg={"white"}
            type="text"
            display="flex"
            flexGrow={1}
            h={"100%"}
            p={2}
            borderRightRadius={0}
            flexShrink={1}
            _focusVisible={{ outline: "none" }}
          />
          <Img src={serachicon} alt="icon" h={5} w={12} />
        </Flex>
        {/* right options */}
        <Flex
          alignItems={"center"}
          color={"white"}
          mx={2}
          fontSize={"xs"}
          justifyContent={"space-between"}
          whiteSpace={"nowrap"}
          px={4}
        >
          <Box mx={3} cursor={"pointer"} _hover={{ textDecor: "underline" }}>
            <p>Hello, Amit</p>
            <Text fontWeight={"bold"}>Account & Lists</Text>
          </Box>
          <Box mx={3} cursor={"pointer"} _hover={{ textDecor: "underline" }}>
            <p>Returns</p>
            <Text fontWeight={"bold"}>& Orders</Text>
          </Box>
          <Box
            onClick={naviagatetocheckout}
            position="relative"
            display={"flex"}
            flexDir={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            mx={3}
            cursor={"pointer"}
            _hover={{ textDecor: "underline" }}
            w={10}
          >
            <Text
              position={"absolute"}
              right={{ base: -1, sm: 3 }}
              top={{ base: -2, sm: 0 }}
              bg={"yellow.400"}
              w={4}
              h={4}
              textAlign={"center"}
              fontWeight={"bold"}
              borderRadius={"full"}
              color={"black"}
              size={"lg"}
            >
              {cartItems.length}
            </Text>
            <Img src={carticon} h={6} w={6} />
            <Text
              display={{ base: "none", sm: "inline" }}
              fontWeight={"bold"}
              mt={4}
            >
              Basket
            </Text>
          </Box>
        </Flex>
      </Flex>
      {/* bottom nav */}
      <Flex alignItems={"center"} pl={2} p={1} bg="#232F3E" color={"white"}>
        <Img src={homeicon} h={4} w={4} display={"inline"} mx={1} ml={2} />
        <Text mx={2}>All</Text>
        <Text cursor={"pointer"} _hover={{ textDecor: "underline" }}>
          Prime Video
        </Text>
        <Text mx={2} cursor={"pointer"} _hover={{ textDecor: "underline" }}>
          Amazon Business
        </Text>
        <Text
          mx={2}
          display={{ base: "none", lg: "inline" }}
          cursor={"pointer"}
          _hover={{ textDecor: "underline" }}
        >
          Today's Deal
        </Text>
        <Text
          mx={2}
          display={{ base: "none", lg: "inline" }}
          cursor={"pointer"}
          _hover={{ textDecor: "underline" }}
        >
          Electronics
        </Text>
        <Text
          mx={2}
          display={{ base: "none", lg: "inline" }}
          cursor={"pointer"}
          _hover={{ textDecor: "underline" }}
        >
          Foods & Grocery
        </Text>
        <Text
          mx={2}
          display={{ base: "none", lg: "inline" }}
          cursor={"pointer"}
          _hover={{ textDecor: "underline" }}
        >
          Buy Again
        </Text>
      </Flex>
    </>
  );
};

export default Header;
