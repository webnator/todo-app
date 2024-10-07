import User from "@sandbox/domain/User/User";

interface UserRepositoryInterface {
  getLoggedUser(): User | undefined;
  createUser(fullName: string): Promise<User>;
  getCachedUserToken(): string | undefined;
}

export default UserRepositoryInterface;
