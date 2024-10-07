import dbConfig from '../../../config/db.config';
import { Dependencies } from '../../../container';
import List from '../../../domain/List/List';
import Time from '../../../domain/primitives/Time';
import ListRepositoryInterface from '../../../services/abstractions/list/listRepository.interface';
import { DbUser, restore as restoreUser } from '../user/user.repository';

export type DbList = {
  id?: number;
  user_id: number;
  name?: string;
  shared_key: string;
  created_at: string;
  updated_at: string;
}

export type DbListResult = { list: DbList; user: DbUser };

export default ({ dbAdapter }: Dependencies): ListRepositoryInterface => {
  function baseQuery() {
    const query = dbAdapter(`${dbConfig.TABLES.LIST} as list`)
      .leftJoin<DbListResult>(`${dbConfig.TABLES.USER} as user`, { 'list.user_id': 'user.id' })
      .select<DbListResult[]>(dbAdapter.raw('row_to_json("user".*) AS "user", row_to_json("list".*) AS "list"'))
      .options({ nestTables: true });

    return query;
  }

  return {
    async getBySharedKey(sharedKey) {
      const [list] = await baseQuery().where('list.shared_key', sharedKey);
      return list ? restore(list) : null;
    },

    async create(list) {
      const [dbList] = await dbAdapter<DbList>(dbConfig.TABLES.LIST).insert(adapt(list)).returning('id');
      list.id = dbList.id;
      return list;
    },

    async update(list) {
      await dbAdapter<DbList>(dbConfig.TABLES.LIST).update(adapt(list)).where('id', list.id);
    },
  };
};

export function restore(dbList: DbListResult): List {
  return new List({
    id: dbList.list.id,
    user: restoreUser(dbList.user),
    name: dbList.list.name,
    sharedKey: dbList.list.shared_key,
    createdAt: Time.fromString(dbList.list.created_at),
    updatedAt: Time.fromString(dbList.list.updated_at),
  });
}

function adapt(list: List): DbList {
  return {
    id: list.id,
    user_id: list.user.id,
    name: list.name,
    shared_key: list.sharedKey,
    created_at: list.createdAt.format(),
    updated_at: list.updatedAt.format(),
  };
}
