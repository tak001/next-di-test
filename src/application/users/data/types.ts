import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';

export interface FetchUserClassRootParams {
  id: Id;
}

export type FetchUserClassResponse = User;

export type FetchAllUserClassResponse = User[];

export type FetchSWRUserClassResponse = User[];
