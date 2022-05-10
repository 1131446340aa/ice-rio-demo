import { Car } from './childInterface';

export interface ICustomerDetail<U, T> extends Car {
  age: T;
  shape: {
    height: number;
    weight: number;
    money?: number;
  };
  helpers: string[];
  des: U;
  car: Car;
}

export interface CustomerModel {
  userName: string;
  password: string;
  nickName: string;
  gender: string;
}

export interface ISuccessRet<T> {
  code: number;
  ret: T;
  message: string;
}

export type IValidatedJson = {
  jsonStr: { test: string[] };
  age: string;
};
