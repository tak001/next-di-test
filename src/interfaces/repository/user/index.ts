import { API, USERS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';
import {
  Data,
  GetUserClassResponse,
  GetUserClassRootParams,
} from './types/getUserClass';

export class UserRepository implements IUserRepository {
  constructor(private readonly _client: IClient) {}

  async fetchAll(): Promise<GetUserClassResponse<Data[]>> {
    const { data } = await this._client.get<GetUserClassResponse<Data[]>>(
      API + USERS,
    );
    return data;
  }

  async fetch(
    rootParams: GetUserClassRootParams,
  ): Promise<GetUserClassResponse<Data>> {
    const { data } = await this._client.get<GetUserClassResponse<Data>>(
      API + `${USERS}/${rootParams.id}`,
    );
    return data;
  }
}
