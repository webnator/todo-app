import { Dependencies } from '../container';
import List from '../domain/List/List';
import { UserNotAuthorized } from '../domain/primitives/exceptions';
import { EntityAction } from '../infra/adapters/ws.adapter';
import listModel, { ListOutput } from './outputModels/list.model';

export type ListPayload = {
  name: string;
}

export default ({
  logger,
  userService,
  listService,
  listRepository,
  wsAdapter,
}: Dependencies) => {
  return {
    async create(userId: number, listPayload: ListPayload): Promise<ListOutput> {
      logger.debug({ userId, listName: listPayload.name }, 'Creating list for user');
      const user = await userService.getById(userId);

      const newList = new List({
        ...listPayload,
        user,
      });

      let listWithSharedKey: List;
      do {
        listWithSharedKey = await listRepository.getBySharedKey(newList.sharedKey);
        if (listWithSharedKey) {
          newList.resetSharedKey();
        }
      } while (listWithSharedKey);
      
      const list = await listRepository.create(newList);
      return listModel(list);
    },

    async update(userId: number, sharedKey: string, listPayload: ListPayload): Promise<ListOutput> {
      logger.debug({ userId, listName: listPayload.name }, 'Updating list for user');
      const user = await userService.getById(userId);
      const list = await listService.getBySharedKey(sharedKey);

      if (list.user.id !== user.id) {
        logger.warn({ userId: user.id, listId: list.id },'Unauthorized user trying to update the list');
        throw UserNotAuthorized;
      }

      list.update(listPayload);
      
      await listRepository.update(list);

      wsAdapter.broadcastList(list, EntityAction.UPDATE);
      return listModel(list);
    },

    async getBySharedKey(sharedKey: string): Promise<ListOutput> {
      const list = await listService.getBySharedKey(sharedKey);
      return listModel(list);
    },
  };
};
