import React, { useEffect, useState } from 'react';
import {Container, IconBase, IconContent, TextNotPermitted, VisionCamera} from './styles';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";
import QRCodeAnalyser from '@/assets/svg/qrcode-analyser.svg'
import COLORS from '@/constants/colors';
import { useQRCode } from '@/hooks/business/useQRCode';
import { useNavigation } from '@react-navigation/native';




const QrCodeScanner = () => {
  const navigation = useNavigation();
  const { getQRCode } = useQRCode();
  const [hasPermission, setHasPermission] = useState(false);
  const device = useCameraDevice('back');
  const [code, setCode] = useState('MTczMDI5OTQ3NjI1MjA1Mw==');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      if(!code || code !== codes[0].value) {
        setCode(codes[0].value ?? '');
      }
    }
  })

  useEffect(() => {
    const requestCameraPermission = async () => {
      const permission = await Camera.requestCameraPermission();
      console.log("Camera.requestCameraPermission ", permission);
      setHasPermission(permission === "granted");
    };

    requestCameraPermission();
  }, []);

  const handleQRCode = async (code: string) => {
    const response = await getQRCode(code);
    console.log('response', response);


    navigation.navigate({
      name: 'ProductsDetail',
      params: {product: response.product}
    })
  }

  useEffect(() => {
    if(code) {
      console.log('code', code);
      handleQRCode(code);
    }
  }, [code])


  if (device == null || !hasPermission) {
    return (
      <TextNotPermitted>
        Você precisa permitir o acesso a câmera para usar o aplicativo
      </TextNotPermitted>
    );
  }

  return (
      <Container>
        <IconBase>
          <IconContent>
            <QRCodeAnalyser  fill={COLORS.WHITE} />
          </IconContent>
        </IconBase>

        <VisionCamera isActive device={device} codeScanner={codeScanner}  />
        
      </Container>
    
  );
};

export default QrCodeScanner;
