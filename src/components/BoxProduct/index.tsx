import React from "react";

import BoxImage from '@/assets/image/box.png'
import { ContentBox, Box, Image, Title, Dosage, AlignButton,  } from "./styles";

import Button from "../Button";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";




export const BoxProduct = () => {
  const navigation = useNavigation();

  console.log('BoxProduct component');

  return (
    <ContentBox>
      <TouchableOpacity onPress={() => navigation.navigate('ProductsDetail')}>
      <Box>
        <Image source={BoxImage} />
        <Title>testosterone Enanthate</Title>
        <Dosage>300mg / 10ml</Dosage>
        <AlignButton>
          <Button onPress={() => {}} text="Description" />
        </AlignButton>
      </Box>
      </TouchableOpacity>
    </ContentBox>
  );
}

export default BoxProduct;