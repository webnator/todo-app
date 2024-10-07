import Time from '@sandbox/domain/primitives/Time';
import User from '@sandbox/domain/User/User';

export class UserBuilder {
  private data: User = {
    id: 1,
    fullName: 'Shigeru Miyamoto',
    loginCode: 'FAGSJDH2435643',
    createdAt: Time.fromString('2023-10-27'),
  };

  public with<K extends keyof User>(key: K, value: User[K]) {
    this.data[key] = value;
    return this;
  }

  public build(): User {
    return {
      ...this.data,
    };
  }
}
