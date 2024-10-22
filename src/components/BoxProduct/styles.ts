import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';
import styled from 'styled-components/native';

export const ContentBox = styled.View`
  padding: 7px;
  padding-bottom: 20px;
  flex: 1;
  margin-bottom: 10px;
`;

export const Box = styled.View`
  border: 1px solid ${COLORS.BROWN};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const ContentImage = styled.View`
  width: 100%;
  height: 140px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.BLUE};
  margin-bottom: 3px;
`;

export const Dosage = styled.Text`
  font-size: 12px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BROWN};
`;

export const AlignButton = styled.View`
  margin-top: 20px;
  margin-bottom: -20px;
`;
