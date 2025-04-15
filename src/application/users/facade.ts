import httpClientFactory from '@/infrastructure/HttpClientFactory';
import IClient from '@/infrastructure/provider/IClient';
import { UserRepository } from '@/interfaces/repository/user';
import { Fetch, FetchAll } from './interactors';

class UserFactory {
  private _findAll?: FetchAll;
  private _find?: Fetch;

  constructor(private readonly _client: IClient) {}

  get findAll() {
    if (!this._findAll) {
      const repository = new UserRepository(this._client);
      this._findAll = new FetchAll(repository);
    }

    return this._findAll;
  }

  get find() {
    if (!this._find) {
      const repository = new UserRepository(this._client);
      this._find = new Fetch(repository);
    }

    return this._find;
  }
}

const facade = new UserFactory(httpClientFactory.getClient());

export default facade;
