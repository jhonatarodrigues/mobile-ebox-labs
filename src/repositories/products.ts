import { getInstance } from '@/service/axios';

export const ProductsRepository = {
  getProducts: async () => {
    const instance = getInstance();

    const response = await instance.get('/product');

    return response.data;
  },
};
