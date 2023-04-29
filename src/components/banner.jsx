import { Box, Img } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { bannerimage } from "../helpers/bannerimage";
const Banner = () => {
  return (
    <Box
      position={"relative"}
      sx={{
        ".carousel .slide img": {
          "max-height": "70vh" /* change this to whatever you want */,
        },
      }}
    >
      <Box
        position={"absolute"}
        width={"100%"}
        h={"70vh"}
        bgGradient={"linear(to-tr, gray.50 5%,transparent)"}
        zIndex={20}
        bottom={0}
      />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        showArrows={true}
        dynamicHeight={false}
        onClickThumb={false}
      >
        <Box>
          <Img loading="lazy" src={bannerimage[0]} />
        </Box>

        <Box>
          <Img loading="lazy" src={bannerimage[1]} />
        </Box>

        <Box>
          <Img loading="lazy" src={bannerimage[2]} />
        </Box>
      </Carousel>
    </Box>
  );
};

export default Banner;
