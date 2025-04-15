import { AxiosDefaults, AxiosRequestConfig, AxiosResponse } from 'axios';

export default interface IClient {
  defaults: AxiosDefaults;

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;
}
