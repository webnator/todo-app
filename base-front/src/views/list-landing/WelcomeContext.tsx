'use client';
import cacheConfig from '@sandbox/config/cache.config';
import List from '@sandbox/domain/List/List';
import User from '@sandbox/domain/User/User';
import { useDependency } from '@sandbox/infra/react/useDependency';
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { createContext, PropsWithChildren } from 'react';

interface WelcomeContext {
  data: {
    user: User | undefined;
  };
  createList: UseMutationResult<List, Error, void, unknown>;
}

const { BASE_KEYS: BASE_QUERY_KEYS } = cacheConfig;

const WelcomeContext = createContext<WelcomeContext | undefined>(undefined);

export default WelcomeContext;

export const WelcomeProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();
  const userRepository = useDependency('userRepository');
  const listRepository = useDependency('listRepository');
  
  const createListMutation = useMutation({
    mutationFn: listRepository.createList,
    onSettled: (newList, error) => {
      if (newList && !error) {
        queryClient.setQueryData([BASE_QUERY_KEYS.list], newList);
      }
    }
  });

  const value: WelcomeContext = {
    data: {
      user: userRepository.getLoggedUser(),
    },
    createList: createListMutation,
  };

  return (
    <WelcomeContext.Provider value={value}>
      {children}
    </WelcomeContext.Provider>
  );
};
