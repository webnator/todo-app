type User = {
  id: number;
  fullName: string;
  loginCode: string;
  createdAt: string;
}

type PublicUser = {
  id: number;
  fullName: string;
}

export type { User, PublicUser };