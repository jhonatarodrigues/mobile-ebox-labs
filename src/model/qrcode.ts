import { ProductsModel } from './products';

export type QRCodeModel = {
  id: number;
  code: string;
  product_id: number;
  views: number;
  product: ProductsModel;
};
