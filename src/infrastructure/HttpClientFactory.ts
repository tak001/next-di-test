import { mockClient } from '@/infrastructure/provider/mockClient';
import { prodClient } from '@/infrastructure/provider/prodClient';

class HttpClientFactory {
  getClient() {
    if (process.env.APP_ENV === 'local') {
      return mockClient;
    }
    if (process.env.APP_ENV === 'develop') {
      return prodClient;
    }
    if (process.env.APP_ENV === 'production') {
      return prodClient;
    }
    return prodClient;
  }
}

const httpClientFactory = new HttpClientFactory();

export default httpClientFactory;
