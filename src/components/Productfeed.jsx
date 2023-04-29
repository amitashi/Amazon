import { Box, Grid, GridItem, Img } from "@chakra-ui/react";
import React from "react";
import prodocutbanner from "../helpers/productfeebanner.jpg";
import ProductCard from "./productCard";
import prodocutbanner2 from "../helpers/Camera-Offers.jpg";

const Productfeed = ({ products }) => {
  return (
    <Box bg={"gray.50"} maxW={"90%"} mx={"auto"} mt={{ base: 0, md: -50 }}>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gridAutoFlow={true}
      >
        {products
          .slice(0, 4)
          .map(({ id, title, price, category, description, image }) => (
            <GridItem>
              <ProductCard
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
              />
            </GridItem>
          ))}
        <GridItem colSpan={{ base: 1, md: 2, lg: 3, xl: 4 }}>
          <Img
            src={prodocutbanner}
            h={{ base: 300, sm: 400, md: 600 }}
            mx={"auto"}
            border={2}
          />
        </GridItem>
        {products
          .slice(4, 6)
          .map(({ id, title, price, category, description, image }) => (
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <ProductCard
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
              />
            </GridItem>
          ))}

        {products
          .slice(6, 10)
          .map(({ id, title, price, category, description, image }) => (
            <GridItem>
              <ProductCard
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
              />
            </GridItem>
          ))}
        <GridItem colSpan={{ base: 1, md: 2, lg: 3, xl: 4 }}>
          <Img
            src={prodocutbanner2}
            h={{ base: 300, sm: 300, md: 300 }}
            mx={"auto"}
            border={2}
          />
        </GridItem>

        {products
          .slice(10)
          .map(({ id, title, price, category, description, image }) => (
            <GridItem>
              <ProductCard
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
              />
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default Productfeed;
