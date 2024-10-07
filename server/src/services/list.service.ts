import { Dependencies } from "../container";
import List from "../domain/List/List";
import { ListNotFound } from "../domain/primitives/exceptions";

export default ({
  logger,
  listRepository,
}: Dependencies) => {
  return {
    async getBySharedKey(sharedKey: string): Promise<List> {
      const list = await listRepository.getBySharedKey(sharedKey);
      if (!list) {
        logger.warn({ sharedKey }, 'There\'s no list associated to that code');
        throw ListNotFound;
      }
      return list;
    },
  }
}