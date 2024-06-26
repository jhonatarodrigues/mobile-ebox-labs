import React from "react";
import { Text, View, NativeModules, Platform, StatusBar, TouchableOpacity } from "react-native";
import { BaseAlignBack, BaseButtonBack, ContentHeader, Title } from "./styles";
import ArrowLeft from "@/assets/svg/arrowLeft.svg";
import COLORS from "@/constants/colors";
import { useNavigation } from "@react-navigation/native";

const {StatusBarManager} = NativeModules;

interface IHeaderProps {
  title: string;
}



const HeaderComponent = ({title} : IHeaderProps) => {
  const navigation = useNavigation();
  const STATUSBAR_HEIGHT = Platform.OS ? StatusBarManager.HEIGHT : StatusBar.currentHeight;
  const onBack = () => navigation.goBack();

  return (
    <ContentHeader style={{paddingTop: STATUSBAR_HEIGHT}}>
      {navigation.canGoBack() && (
        <BaseAlignBack>
          <TouchableOpacity onPress={onBack}>
            <BaseButtonBack>
              <ArrowLeft stroke={COLORS.WHITE} />
            </BaseButtonBack>
          </TouchableOpacity>
        </BaseAlignBack>
      )}
      <Title>{title}</Title>
    </ContentHeader>
  );
}

export default HeaderComponent;