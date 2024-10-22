import React from "react";
import { ButtonBase, ButtonText } from "./styles";
import COLORS from "@/constants/colors";
import { Touchable, TouchableOpacity } from "react-native";

const styleBoxShadow = {
  shadowColor: COLORS.BLACK,
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.3,
  shadowRadius: 3,
}

type IButtonProps = {
  onPress?: () => void;
  text: string;
  disabled?: boolean;
}

const Button = ({ onPress, text, disabled }:IButtonProps) => {



  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <ButtonBase style={styleBoxShadow}>
        <ButtonText>{text}</ButtonText>
      </ButtonBase>
    </TouchableOpacity>
  );
}

export default Button;