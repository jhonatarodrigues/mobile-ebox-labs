import React from "react";
import { Text } from "react-native";

import BoxImage from '@/assets/image/box.png'
import { ContentBox, Box, Image, Title, Dosage, ButtonDescription, ButtonDescriptionText } from "./styles";
import COLORS from "@/constants/colors";


const styleBoxShadow = {
  shadowColor: COLORS.BLACK,
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.3,
  shadowRadius: 3,
}

export const BoxProduct = () => {

  console.log('BoxProduct component');

  return (
    <ContentBox>
      <Box>
        <Image source={BoxImage} />
        <Title>testosterone Enanthate</Title>
        <Dosage>300mg / 10ml</Dosage>
        
        <ButtonDescription style={styleBoxShadow}>
          <ButtonDescriptionText>Description</ButtonDescriptionText>
        </ButtonDescription>
      </Box>
    </ContentBox>
  );
}

export default BoxProduct;