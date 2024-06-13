import React from "react";

import BoxImage from '@/assets/image/box.png'
import { ContentBox, Box, Image, Title, Dosage, AlignButton,  } from "./styles";

import Button from "../Button";




export const BoxProduct = () => {

  console.log('BoxProduct component');

  return (
    <ContentBox>
      <Box>
        <Image source={BoxImage} />
        <Title>testosterone Enanthate</Title>
        <Dosage>300mg / 10ml</Dosage>
        <AlignButton>
          <Button onPress={() => {}} text="Description" />
        </AlignButton>
      </Box>
    </ContentBox>
  );
}

export default BoxProduct;