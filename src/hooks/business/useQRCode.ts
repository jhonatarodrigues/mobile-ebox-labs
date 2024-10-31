import { QRCodeModel } from '@/model/qrcode';
import { QRCodeRepository } from '@/repositories/qrcodeRepository';

interface UseProductsProps {
  getQRCode: (code: string) => Promise<QRCodeModel>;
}

export const useQRCode = (): UseProductsProps => {
  const getQRCode = async (code: string) => {
    try {
      const response = await QRCodeRepository.getQRcode(code);

      return response;
    } catch (error) {
      console.log('Error getQRCode', error);
    }
  };

  return {
    getQRCode,
  };
};
