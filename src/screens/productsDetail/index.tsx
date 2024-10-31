import PageBase from "@/components/PageBase";
import React from "react";
import { BaseImage, BaseText, BoxDescription, BoxDescriptionAlignText, ButtonAlign, ContentBox, ContentImage, DescriptionText, DescriptionTitle, Image, OrnamentLine, Quantity, Title } from "./styles";
import Button from "@/components/Button";
import { BaseGradient } from "@/components/BaseGradient";
import { BASE_URL } from "@env";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/routes/types";


export const ProductsDetail = ({route}: {route: RouteProp<RootStackParamList, 'DetailsProduct'>;}) => {
  const {product} = route.params;

  return (
    <BaseGradient>
      <PageBase>
        <ContentBox>
          <ContentImage>
            <BaseImage>
              <Image source={{uri: `${BASE_URL}/uploads/${product.file}`}} />
            </BaseImage>
            <BaseText>
              <Title>{product.title}</Title>
              <Quantity>{product.quantity}</Quantity>
            </BaseText>

          </ContentImage>
          <OrnamentLine />
          <BoxDescription>
            <BoxDescriptionAlignText>
              <DescriptionTitle>Composition</DescriptionTitle>
              <DescriptionText>Each ml contains:
               {product.description}
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