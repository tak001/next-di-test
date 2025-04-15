export interface GetUserClassRootParams {
  id: number;
}

export interface GetUserClassResponse<T> {
  message: 'ok';
  data: T;
}

export interface Data {
  id: number;
  name: string;
  mailAddress: string;
}
