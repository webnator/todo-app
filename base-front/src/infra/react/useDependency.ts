import { useContext } from 'react';
import { Dependencies } from '../ioc/container';
import ContainerContext from './ContainerContext';

export const useDependency = <D extends keyof Dependencies>(dependencyKey: D): Dependencies[D] => {
  const container = useContext(ContainerContext);
  if (!container) {
    throw new Error('Container not initialized');
  }
  return container.resolve(dependencyKey);
};
