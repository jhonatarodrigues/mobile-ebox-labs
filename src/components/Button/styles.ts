import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';
import styled from 'styled-components/native';

export const ButtonBase = styled.View`
  padding-vertical: 10px;
  padding-horizontal: 25px;
  background-color: ${COLORS.BROWN};
  border-radius: 40px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.WHITE};
`;
