import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';
import styled from 'styled-components/native';

export const ContentHeader = styled.View`
  background: transparent;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BROWN};
  font-size: 18px;
  text-align: center;
  padding-top: 10px;
`;

export const BaseButtonBack = styled.View`
  width: 30px;
  height: 30px;
`;

export const BaseAlignBack = styled.View`
  position: absolute;
  left: 15px;
  bottom: 0;
`;
