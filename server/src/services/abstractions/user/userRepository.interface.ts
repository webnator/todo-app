import User from '../../../domain/User/User';

interface UserRepositoryInterface {
  getByLoginCode(loginCode: string): Promise<User>;
  getById(id: number): Promise<User>;
  create(user: User): Promise<User>;
}

export default UserRepositoryInterface;
