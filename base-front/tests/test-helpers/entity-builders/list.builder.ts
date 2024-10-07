import Time from '@sandbox/domain/primitives/Time';
import List from '@sandbox/domain/List/List';

export class ListBuilder {
  private data: List = {
    id: 1,
    user: {
      id: 34,
      fullName: 'Testing Man',
    },
    name: 'To do',
    sharedKey: 'mr-sh-cobra-27',
    createdAt: Time.fromString('2023-10-27'),
    updatedAt: Time.fromString('2023-10-27'),
  };

  public with<K extends keyof List>(key: K, value: List[K]) {
    this.data[key] = value;
    return this;
  }

  public build(): List {
    return {
      ...this.data,
    };
  }
}
