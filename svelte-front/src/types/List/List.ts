import type { PublicUser } from '../User/User';

type List = {
  id: number;
  user: PublicUser;
  name?: string;
  sharedKey: string;
  createdAt: string;
  updatedAt: string;
}

export type { List };
