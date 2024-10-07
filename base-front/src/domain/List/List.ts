import Time from '../primitives/Time';
import { PublicUser } from '../User/User';

type List = {
  id: number;
  user: PublicUser;
  name?: string;
  sharedKey: string;
  createdAt: Time;
  updatedAt: Time;
}

export default List;
