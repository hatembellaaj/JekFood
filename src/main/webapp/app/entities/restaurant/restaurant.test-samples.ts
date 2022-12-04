import { IRestaurant, NewRestaurant } from './restaurant.model';

export const sampleWithRequiredData: IRestaurant = {
  id: '9a4f2ee4-d45a-4122-b55a-c0059e33895f',
  name: 'Locks Toys',
  phone: '302.645.1432 x70308',
  address: 'Road',
  photo: '../fake-data/blob/hipster.png',
  photoContentType: 'unknown',
};

export const sampleWithPartialData: IRestaurant = {
  id: '51f0cd51-2462-4b02-b3f4-c6bcd02b909d',
  name: 'Account',
  phone: '(730) 935-6460 x680',
  address: 'withdrawal Home',
  photo: '../fake-data/blob/hipster.png',
  photoContentType: 'unknown',
};

export const sampleWithFullData: IRestaurant = {
  id: '2e458131-fbf0-45c0-820b-c7bafcebf3ca',
  name: 'optical Granite Accounts',
  phone: '500-260-8899 x0743',
  address: 'Metal',
  photo: '../fake-data/blob/hipster.png',
  photoContentType: 'unknown',
};

export const sampleWithNewData: NewRestaurant = {
  name: 'Card',
  phone: '416.690.1547 x78345',
  address: 'Electronics paradigm',
  photo: '../fake-data/blob/hipster.png',
  photoContentType: 'unknown',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
