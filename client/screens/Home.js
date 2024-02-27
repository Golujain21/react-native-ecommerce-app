import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Categories from "../components/category/Categories";
import Header from "../components/Layout/Header";
import Banner from "../components/Banner/Banner";
import Products from "../components/Product/Products";

const Home = () => {
  return (
    <Layout>
      <StatusBar />
      <Header />
      <Categories />
      <Banner />
      <Products />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default Home;
