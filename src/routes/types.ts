import { ProductsModel } from '@/model/products';

export type RootStackParamList = {
  Home: undefined;
  DetailsProduct: { product: ProductsModel };
};
