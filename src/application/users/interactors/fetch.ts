import { IFetch } from '@/application/users/useCase';
import { User } from '@/domain/models/users/user';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';
import {
  FetchUserClassResponse,
  FetchUserClassRootParams,
} from '../data/types';

export class Fetch implements IFetch {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    params: FetchUserClassRootParams,
  ): Promise<FetchUserClassResponse> {
    const { data } = await this.userRepository.fetch(params);
    return new User(data.id, data.name, data.mailAddress);
  }
}
