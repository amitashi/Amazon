import React, { useEffect, useState } from "react";
import Header from "./components/header";
import { Box, Spinner } from "@chakra-ui/react";
import Banner from "./components/banner";
import Productfeed from "./components/Productfeed";
import dummydata from "./DummySore/DummyStoreData.json";

const App = () => {
  const [products, setproducts] = useState([]);
  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    setisloading(true);
    laodData();
  }, []);

  const laodData = async () => {
    try {
      const getdata = await fetch("https://fakestoreapi.com/products");
      const data = await getdata.json();
      setproducts(data);
      // console.log(data);
      setisloading(false);
    } catch (err) {
      setproducts(dummydata);
      setisloading(false);
      // console.log(err);
    }
  };

  return (
    <>
      {isloading ? (
        <Box
          display={"flex"}
          height={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : (
        <>
          {/* header file top layer */}
          <Header />

          {/* carousel */}
          <Box
            mt={2}
            mx={"auto"}
            maxW={{ base: "100%", "2xl": "90%" }}
            bg={"gray.100"}
          >
            <Banner />
          </Box>

          {/*producfeed  */}

          <Productfeed products={products} />
        </>
      )}
    </>
  );
};

export default App;
