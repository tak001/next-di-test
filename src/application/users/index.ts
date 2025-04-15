import {
  FetchAllUserClassResponse,
  FetchUserClassResponse,
  FetchUserClassRootParams,
} from './data/types';
import facade from './facade';

class UserUseCase {
  async findAll(): Promise<FetchAllUserClassResponse> {
    const useCase = facade.findAll;
    const result = await useCase.execute();
    return result;
  }

  async find(
    params: FetchUserClassRootParams,
  ): Promise<FetchUserClassResponse> {
    const useCase = facade.find;
    const result = await useCase.execute(params);
    return result;
  }
}

const userUseCase = new UserUseCase();

export default userUseCase;
