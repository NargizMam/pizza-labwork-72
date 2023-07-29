export interface IDish {
  id: string;
  name: string;
  image: string;
  price: number;
}

export type TApiDish = Omit<IDish, 'id'>;

export interface IDishesList {
  [id: string]: IDish;
}
export interface IDishMutation {
  name: string;
  image: string;
  price: string;
}
export interface OrdersDish {
  dishId: string;
  amount: number;
}
export interface ApiOrder {
  id: string;
  dishes: CartDish[];
}
export interface Orders {
  [id: string]: number;
}
export interface ApiOrdersList {
  [id: string]: ApiOrder;
}

export interface AllOrders extends ApiOrder{
  id: string,

}
