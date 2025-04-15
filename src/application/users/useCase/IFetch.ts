import {
  FetchUserClassResponse,
  FetchUserClassRootParams,
} from '../data/types';

export interface IFetch {
  execute: (
    params: FetchUserClassRootParams,
  ) => Promise<FetchUserClassResponse>;
}
