import List from '../../../domain/List/List';

interface ListRepositoryInterface {
  getBySharedKey(sharedKey: string): Promise<List>;
  create(list: List): Promise<List>;
  update(list: List): Promise<void>;
}

export default ListRepositoryInterface;
