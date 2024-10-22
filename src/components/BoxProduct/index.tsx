import React from "react";
import { BASE_URL } from '@env';

import { ContentBox, Box, Image, Title, Dosage, AlignButton, ContentImage,  } from "./styles";

import Button from "../Button";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductsModel } from "@/model/products";

type BoxProductProps = {
  product: ProductsModel;
}

export const BoxProduct = ({product}: BoxProductProps) => {
  const navigation = useNavigation();

  console.log('\n\n\n\n =====   ',  `${BASE_URL}/upload/${product.file}`);


  return (
    <ContentBox>
      <TouchableOpacity onPress={() => navigation.navigate('ProductsDetail')}>
      <Box>
        <ContentImage>
          <Image source={{uri: `${BASE_URL}/uploads/${product.file}`}} />
        </ContentImage>
        <Title>{product.title}</Title>
        <Dosage>{product.quantity}</Dosage>
        <AlignButton>
          <Button disabled text="Description" />
        </AlignButton>
      </Box>
      </TouchableOpacity>
    </ContentBox>
  );
}

export default BoxProduct;