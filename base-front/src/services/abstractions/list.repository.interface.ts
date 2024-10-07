import List from "@sandbox/domain/List/List";
import Task from "@sandbox/domain/Task/Task";

interface ListRepositoryInterface {
  createList(): Promise<List>;
  updateList(list: List): Promise<List>;
  getListByKey(sharedKey: string): Promise<List | undefined>;
  getTasksForList(sharedKey: string): Promise<Task[] | undefined>;
}

export default ListRepositoryInterface;
