import { IPlates, NewPlates } from './plates.model';

export const sampleWithRequiredData: IPlates = {
  id: 'abc64f4f-f41e-4fe2-b2ac-9ce7f01d05a5',
  name: 'Licensed invoice Health',
  price: 19594,
  photo: '../fake-data/blob/hipster.png',
  photoContentType: 'unknown',
};

export const sampleWithPartialData: IPlates = {
  id: '9ac514b1-5938-4f12-86f6-d290c238b63b',
  name: 'Streamlined',
  price: 86006,
  photo: '../fake-data/blob/hipster.png',
  photoContentType: 'unknown',
};

export const sampleWithFullData: IPlates = {
  id: '5791b97f-e00b-484d-8982-46ce01c308aa',
  name: 'Tasty analyzer',
  price: 9767,
  photo: '../fake-data/blob/hipster.png',
  photoContentType: 'unknown',
};

export const sampleWithNewData: NewPlates = {
  name: 'Heights',
  price: 32499,
  photo: '../fake-data/blob/hipster.png',
  photoContentType: 'unknown',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
