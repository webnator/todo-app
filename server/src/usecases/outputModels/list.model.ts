import List from '../../domain/List/List';
import { publicUserModel, PublicUserOutput } from './user.model';

export type ListOutput = {
  id: number;
  user: PublicUserOutput;
  name: string;
  sharedKey: string;
  createdAt: string;
  updatedAt: string;
}

export default function listModel(list: List): ListOutput {
  return {
    id: list.id,
    user: publicUserModel(list.user),
    name: list.name,
    sharedKey: list.sharedKey,
    createdAt: list.createdAt.format(),
    updatedAt: list.updatedAt.format(),
  };
}
