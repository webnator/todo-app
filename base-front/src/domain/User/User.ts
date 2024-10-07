import Time from '../primitives/Time';

type User = {
  id: number;
  fullName: string;
  loginCode: string;
  createdAt: Time;
}

export type PublicUser = {
  id: number;
  fullName: string;
}

export default User;