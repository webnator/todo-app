import Chance from 'chance';
import Time from '../primitives/Time';
import User from '../User/User';

const chance = new Chance();

type ListParams = {
  id?: number;
  user: User;
  name?: string;
  sharedKey?: string;
  createdAt?: Time;
  updatedAt?: Time;
}

export default class List {
  public id?: number;
  public user: User;
  public name?: string;
  public sharedKey: string;
  public createdAt: Time;
  public updatedAt: Time;

  constructor(list: ListParams) {
    this.id = list.id;
    this.user = list.user;
    this.name = list.name;
    this.sharedKey = list.sharedKey ?? this.generateSharedKey();
    this.createdAt = list.createdAt ?? Time.now();
    this.updatedAt = list.updatedAt ?? Time.now();
  }

  private generateSharedKey(): string {
    const prefix = chance.prefix({ full: true });
    const state = chance.state();
    const animal = chance.animal();
    const number = chance.integer({ min: 10, max: 99 });
    return `${prefix}-${state}-${animal}-${number}`.toLowerCase().replace(/ /g, '-');
  }

  public resetSharedKey(): void {
    this.sharedKey = this.generateSharedKey();
  }

  public update(updateObject: Partial<Pick<ListParams, 'name'>>): void {
    Object.entries(updateObject).forEach(([ key, value ]) => {
      this[key] = value;
    })
    this.updatedAt = Time.now();
  }
}
