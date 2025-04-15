import { objectKeysToCamel, objectKeysToKebab } from '@/utils/changeCase';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';

const config: AxiosRequestConfig<AxiosRequestHeaders> = {
  // ブラウザのSessionCookieなどをaxiosでそのままサーバーに送信する
  withCredentials: true,
};

const client = axios.create(config);

client.interceptors.request.use(
  (config) => {
    // ファイルアップロードのときは何もしない
    if (config.data instanceof FormData) {
      return config;
    }
    config.data = objectKeysToKebab(config.data);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

/**
 * @see https://axios-http.com/docs/interceptors
 */
client.interceptors.response.use(
  (response) => {
    // ステータスコードが2xxの範囲にある場合、この関数が起動する
    // キャメルケースに変換
    response.data = objectKeysToCamel(response.data);
    return response;
  },
  // ステータスコードが2xxの範囲外の場合、この関数が起動する
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default client;
