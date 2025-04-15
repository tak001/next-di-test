import { FetchAllUserClassResponse } from '../data/types';

export interface IFetchAll {
  execute(): Promise<FetchAllUserClassResponse>;
}
