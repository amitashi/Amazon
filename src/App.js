import React from "react";
import Header from "./components/header";
import { Box, Img } from "@chakra-ui/react";
import testimg from "./helpers/dell_days_3000x1200._CB591033943_.svg";
import Banner from "./components/banner";

const App = () => {
  return (
    <>
      <Header />
      {/* <Img src={testimg} /> */}
      <Box mx={"auto"} maxW={{ base: "2xl", "2xl": "90%" }}>
        <Banner />
      </Box>
    </>
  );
};

export default App;
