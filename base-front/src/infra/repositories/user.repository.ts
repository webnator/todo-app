import serverConfig from "@sandbox/config/server.config";
import User from "@sandbox/domain/User/User";
import UserRepositoryInterface from "@sandbox/services/abstractions/user.repository.interface";
import BaseResponse from "./BaseResponse";
import { Dependencies } from "../ioc/container";

type CachedUser = { token: string; user: User };

const userRepository = ({ cookieAdapter }: Dependencies): UserRepositoryInterface => ({
  getLoggedUser() {
    const cachedUser = cookieAdapter.get<CachedUser>('user');
    return cachedUser?.user;
  },

  getCachedUserToken() {
    const cachedUser = cookieAdapter.get<CachedUser>('user');
    return cachedUser?.token;
  },

  async createUser(fullName) {
    const response = await fetch(`${serverConfig.URL}${serverConfig.ROUTES.CREATE_USER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName }),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    const responseBody = await response.json() as BaseResponse<CachedUser>;
    cookieAdapter.set('user', responseBody.data!);
    return responseBody.data!.user;
  },

});

export default userRepository;
