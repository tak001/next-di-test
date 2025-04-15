import IClient from '@/infrastructure/provider/IClient';
import axiosBase from '@/infrastructure/provider/axiosBase';
import { AxiosRequestConfig } from 'axios';

export class ProdClient implements IClient {
  defaults = axiosBase.defaults;

  post(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.post(url, data, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.put(url, data, config);
  }

  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.get(url, config);
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.delete(url, config);
  }
}

export const prodClient = new ProdClient();
