import User from '../../domain/User/User';

export type UserOutput = {
  id: number;
  fullName: string;
  loginCode: string;
  createdAt: string;
}

export type PublicUserOutput = {
  id: number;
  fullName: string;
}

export default function userModel(user: User): UserOutput {
  return {
    ...publicUserModel(user),
    loginCode: user.loginCode,
    createdAt: user.createdAt.format(),
  };
}

export function publicUserModel(user: User): PublicUserOutput {
  return {
    id: user.id,
    fullName: user.fullName,
  };
}
