import { AwilixContainer } from 'awilix';
import { createContext, PropsWithChildren } from 'react';
import baseContainer, { Dependencies } from '../ioc/container';

interface ContainerProviderProps {
  container?: AwilixContainer<Dependencies>;
}

const ContainerContext = createContext<AwilixContainer<Dependencies> | null>(null);

export default ContainerContext;

export const ContainerProvider = ({
  children,
  container = baseContainer,
}: PropsWithChildren<ContainerProviderProps>) => (
  <ContainerContext.Provider value={container}>
    {children}
  </ContainerContext.Provider>
);
