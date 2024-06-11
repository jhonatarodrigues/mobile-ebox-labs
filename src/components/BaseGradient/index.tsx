import React from "react";
import {BaseLinearGradient} from './styles';
import COLORS from "@/constants/colors";


type IBaseGradientProps = {
  children: JSX.Element;
};


export const BaseGradient = ({children}: IBaseGradientProps) => {

  return (
    <BaseLinearGradient start={{x: 0, y: 0.3}} end={{x: 0, y: 1.4}} colors={[COLORS.BLUE, COLORS.BLACK]} >
      {children}
    </BaseLinearGradient>
  );
}