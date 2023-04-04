import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;
export const IS_IOS = Platform.OS === 'ios';

export const orderDefault: OrderItemModel[] = [
  {
    sku: 'AD001',
    orderName: 'iPhone 15',
    price: '40000',
    stock: '20',
    booking: '40',
    sell: '300',
    status: 'not ready',
  },
  {
    sku: 'AD002',
    orderName: 'Sumsung',
    price: '30000',
    stock: '20',
    booking: '10',
    sell: '100',
    status: 'ready',
  },
];

export interface OrderItemModel {
  sku: string;
  orderName: string;
  price: string;
  stock: string;
  booking: string;
  sell: string;
  status: 'ready' | 'not ready';
}
