import PageBase from "@/components/PageBase";
import React from "react";
import { FlatList, Text } from "react-native";
import { ContentBox } from "./styles";
import BoxProduct from "@/components/BoxProduct";


export const Products = () => {

  console.log('Products screen');

  return (
    <PageBase>
      <ContentBox>
        <FlatList renderItem={() => <BoxProduct />} data={[0,1,2,3,4, 5]} numColumns={2}></FlatList>
      </ContentBox>
    </PageBase>
  );
}

export default Products;