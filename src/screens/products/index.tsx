import PageBase from "@/components/PageBase";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ContentBox } from "./styles";
import BoxProduct from "@/components/BoxProduct";
import { useProducts } from "@/hooks/business/useProducts";
import { ProductsModel } from "@/model/products";


export const Products = () => {
  const {getProducts} = useProducts();
  const [products, setProducts] = useState<ProductsModel[]>();

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await getProducts();
      
      setProducts(response);
    }

    getAllProducts();

  },[]);

  return (
    <PageBase>
      <ContentBox>
        <FlatList renderItem={({item}) => <BoxProduct product={item} />} data={products} numColumns={2}></FlatList>
      </ContentBox>
    </PageBase>
  );
}

export default Products;