import React from "react";
import Header from "./components/header";
import { Img } from "@chakra-ui/react";
import testimg from "./helpers/dell_days_3000x1200._CB591033943_.svg";
const App = () => {
  return (
    <>
      <Header />
      <Img src={testimg} />
    </>
  );
};

export default App;
