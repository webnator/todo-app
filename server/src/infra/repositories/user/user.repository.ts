import dbConfig from '../../../config/db.config';
import { Dependencies } from './../../../container';
import User from './../../../domain/User/User';
import Time from './../../../domain/primitives/Time';
import UserRepositoryInterface from './../../../services/abstractions/user/userRepository.interface';

export type DbUser = {
  id?: number;
  full_name: string;
  login_code: string;
  created_at: string;
}

export default ({ dbAdapter }: Dependencies): UserRepositoryInterface => {
  return {
    async getByLoginCode(loginCode) {
      const [ user ] = await dbAdapter<DbUser>(dbConfig.TABLES.USER).where('login_code', loginCode).select('*');
      return user ? restore(user) : null;
    },

    async getById(id) {
      const [ user ] = await dbAdapter<DbUser>(dbConfig.TABLES.USER).where('id', id).select('*');
      return user ? restore(user) : null;
    },

    async create(user) {
      const [dbUser] = await dbAdapter<DbUser>(dbConfig.TABLES.USER).insert(adapt(user)).returning('id');
      user.id = dbUser.id;
      return user;
    },
  };
};

export function restore(dbUser: DbUser): User {
  return new User({
    id: dbUser.id,
    fullName: dbUser.full_name,
    loginCode: dbUser.login_code,
    createdAt: Time.fromString(dbUser.created_at),
  });
}

function adapt(user: User): DbUser {
  return {
    id: user.id,
    full_name: user.fullName,
    login_code: user.loginCode,
    created_at: user.createdAt.format(),
  };
}
