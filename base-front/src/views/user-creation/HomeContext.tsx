'use client';
import cacheConfig from '@sandbox/config/cache.config';
import User from '@sandbox/domain/User/User';
import { useDependency } from '@sandbox/infra/react/useDependency';
import UserRepositoryInterface from '@sandbox/services/abstractions/user.repository.interface';
import { createContext, PropsWithChildren } from 'react';

interface HomeContext {
  data: {
    user: User | undefined;
  };
  createUser: UserRepositoryInterface['createUser'];
}

const { BASE_KEYS: BASE_QUERY_KEYS } = cacheConfig;

const HomeContext = createContext<HomeContext | undefined>(undefined);

export default HomeContext;

export const HomeProvider = ({ children }: PropsWithChildren) => {
  const userRepository = useDependency('userRepository');
  
  const value: HomeContext = {
    data: {
      user: userRepository.getLoggedUser(),
    },
    createUser: userRepository.createUser,
  };

  return (
    <HomeContext.Provider value={value}>
      {children}
    </HomeContext.Provider>
  );
};
