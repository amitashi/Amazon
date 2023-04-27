import { Box, Img } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { bannerimage } from "../helpers/bannerimage";
const Banner = () => {
  return (
    <Box position={"relative"}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
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
