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


