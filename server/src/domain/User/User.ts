import Chance from 'chance';
import Time from '../primitives/Time';

const chance = new Chance();

type UserParams = {
  id?: number;
  fullName: string;
  loginCode?: string;
  createdAt?: Time;
}

export type TokenUser = {
  id: number;
  loginCode: string;
}

export default class User {
  public id?: number;
  public fullName: string;
  public loginCode: string;
  public createdAt: Time;

  constructor(user: UserParams) {
    this.id = user.id;
    this.fullName = user.fullName;
    this.loginCode = user.loginCode ?? this.generateLoginCode();
    this.createdAt = user.createdAt ?? Time.now();
  }

  private generateLoginCode(): string {
    return chance.string({ length: 12, casing: 'upper', alpha: true, numeric: true });
  }

  public resetLoginCode(): void {
    this.loginCode = this.generateLoginCode();
  }
}
