
import User from '../../../src/domain/User/User';
import Time from '../../../src/domain/primitives/Time';

export class UserBuilder {
  private data: ConstructorParameters<typeof User>[0] = {
    id: 353,
    fullName: 'Williams Aguilera',
    loginCode: 'DVGKZXF1WHG5',
    createdAt: Time.fromString('2023-10-27 00:00:00Z'),
  };

  public with(key: string, value: unknown) {
    this.data[key] = value;
    return this;
  }

  public build(): User {
    return new User({
      ...this.data,
    });
  }
}
