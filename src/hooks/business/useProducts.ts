import { ProductsModel } from '@/model/products';
import { ProductsRepository } from '@/repositories/productsRepository';

interface UseProductsProps {
  getProducts: () => Promise<ProductsModel[]>;
}

export const useProducts = (): UseProductsProps => {
  const getProducts = async () => {
    try {
      const response = await ProductsRepository.getProducts();

      return response;
    } catch (error) {
      console.log('Error getProducts', error);
    }
  };

  return {
    getProducts,
  };
};
