import { View, Text } from "react-native";
import React from "react";
import { ProductsData } from "../../data/ProductsData";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <View>
      {ProductsData.map((p) => {
        return <ProductsCard key={p._id} p={p} />;
      })}
      <Text>Product</Text>
    </View>
  );
};

export default Products;
