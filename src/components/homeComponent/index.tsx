import Container from "common/Container";
import React from "react";
import Brand from "./components/Brand";
import Popular from "./components/Popular";
import TrendingProduct from "./components/TrendingProduct";
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import Follow from "./components/Follow";

const HomeComponent = () => {
  return (
    <>
      <Container>
        <Brand />
        <Popular />
        <TrendingProduct />
      </Container>
      <Banner />
      <Container>
        <BestSeller />
      </Container>
      <Follow />
    </>
  );
};

export default HomeComponent;
