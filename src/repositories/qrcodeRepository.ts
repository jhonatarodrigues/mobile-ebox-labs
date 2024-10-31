import { getInstance } from '@/service/axios';

export const QRCodeRepository = {
  getQRcode: async (code: string) => {
    const instance = getInstance();

    const response = await instance.get(`/qrcode/${code}`);

    return response.data;
  },
};
