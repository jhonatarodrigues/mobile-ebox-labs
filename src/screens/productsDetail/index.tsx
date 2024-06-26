import PageBase from "@/components/PageBase";
import React from "react";
import { BaseImage, BaseText, BoxDescription, BoxDescriptionAlignText, ButtonAlign, ContentBox, ContentImage, DescriptionText, DescriptionTitle, Image, OrnamentLine, Quantity, Title } from "./styles";
import Button from "@/components/Button";
import BoxImage from '@/assets/image/box.png'
import { BaseGradient } from "@/components/BaseGradient";



export const ProductsDetail = () => {

  console.log('Products Detail screen');

  return (
    <BaseGradient>
      <PageBase>
        <ContentBox>
          <ContentImage>
            <BaseImage>
              <Image source={BoxImage} />
            </BaseImage>
            <BaseText>
              <Title>testosterone enanthate</Title>
              <Quantity>300mg / 10ml</Quantity>
            </BaseText>

          </ContentImage>
          <OrnamentLine />
          <BoxDescription>
            <BoxDescriptionAlignText>
              <DescriptionTitle>Composition</DescriptionTitle>
              <DescriptionText>Each ml contains:
                Nandrolone Decanoate...200mg
                Ethyl Oleate N.F...QS
                DISPOSE
                of empty container
                by wrapping with paper
                and putting in garbage
                STORE below 20 C
                (Air Conditioning)
                Protect from light
              </DescriptionText>
            </BoxDescriptionAlignText>
          </BoxDescription>
          <OrnamentLine />
          <ButtonAlign>
            <Button onPress={() => {}} text="Buy" />
          </ButtonAlign>
        </ContentBox>
      </PageBase>
    </BaseGradient>
  );
}

export default ProductsDetail;