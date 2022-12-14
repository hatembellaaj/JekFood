import { IRestaurant } from 'app/entities/restaurant/restaurant.model';

export interface IPlates {
  id: string;
  name?: string | null;
  price?: number | null;
  photo?: string | null;
  photoContentType?: string | null;
  restaurant?: Pick<IRestaurant, 'id' | 'name'> | null;
}

export type NewPlates = Omit<IPlates, 'id'> & { id: null };
