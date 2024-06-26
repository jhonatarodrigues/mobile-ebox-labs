import PageBase from "@/components/PageBase";
import React from "react";
import { FlatList } from "react-native";
import { ContentBox } from "./styles";
import BoxProduct from "@/components/BoxProduct";


export const Products = () => {

  return (
    <PageBase>
      <ContentBox>
        <FlatList renderItem={() => <BoxProduct />} data={[0,1,2,3,4, 5]} numColumns={2}></FlatList>
      </ContentBox>
    </PageBase>
  );
}

export default Products;