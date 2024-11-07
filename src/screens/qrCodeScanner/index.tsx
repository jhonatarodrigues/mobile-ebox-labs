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
import Toast from 'react-native-toast-message';


const QrCodeScanner = () => {
  const navigation = useNavigation();
  const { getQRCode } = useQRCode();
  const [hasPermission, setHasPermission] = useState(false);
  const device = useCameraDevice('back');
  const [code, setCode] = useState('');
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
      setHasPermission(permission === "granted");
    };

    requestCameraPermission();
  }, []);

  const handleQRCode = async (code: string) => {
    try {
      const response = await getQRCode(code);

      if (response.views < 10) {
        Toast.show({
          type: 'success',
          text1: response.product.title,
          text2: 'Produto original e verificado com sucesso'
        });

        navigation.navigate({
          name: 'ProductsDetail',
          params: {product: response.product}
        })
      } else {
        Toast.show({
          type: 'error',
          text1: response.product.title,
          text2: 'Produto potencialmente falsificado, entre em contato com a equipe ebox'
        });
      }
    } catch (error) {
      
      Toast.show({
        type: 'error',
        text1: 'Erro ao verificar produto',
        text2: 'Tente novamente mais tarde'
      });
    }
  }

  useEffect(() => {
    if(code) {
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
