import styled from 'styled-components/native';
import COLORS from '@/constants/colors';
import { Camera } from 'react-native-vision-camera';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.BLACK};
`;

export const TextNotPermitted = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 20px;
  text-align: center;
  padding: 50px 20px;
`;

export const VisionCamera = styled(Camera)`
  flex: 1;
  position: relative;
  z-index: 0;
`;

export const IconBase = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const IconContent = styled.View`
  width: 300px;
  height: 300px;
`;
