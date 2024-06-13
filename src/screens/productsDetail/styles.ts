import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';
import styled from 'styled-components/native';

export const ContentBox = styled.View`
  background-color: ${COLORS.WHITE};
  border-radius: 30px;
  margin: 10px 0;
`;
export const ContentImage = styled.View`
  width: 100%;
  height: 350px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
`;
export const BaseImage = styled.View`
  width: 100%;
  height: 80%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;
export const BaseText = styled.View`
  padding-top: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.BLUE};
`;
export const Quantity = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BROWN};
`;
export const OrnamentLine = styled.View`
  height: 1px;
  background-color: ${COLORS.BROWN};
  margin: 0px 40px;
`;
export const BoxDescription = styled.View`
  background-color: rgba(0, 0, 0, 0.05);
  align-items: center;
  padding-vertical: 30px;
`;
export const BoxDescriptionAlignText = styled.View`
  max-width: 60%;
`;
export const DescriptionTitle = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BROWN};
`;
export const DescriptionText = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.BLUE};
`;
export const ButtonAlign = styled.View`
  align-items: center;
  transform: translateY(-20px);
`;
