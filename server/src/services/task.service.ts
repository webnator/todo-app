import { Dependencies } from "../container";
import { TaskNotFound } from "../domain/primitives/exceptions";
import Task from "../domain/Task/Task";

export default ({
  logger,
  taskRepository,
}: Dependencies) => {
  return {
    async getById(taskId: number): Promise<Task> {
      const task = await taskRepository.getById(taskId);
      if (!task) {
        logger.warn({ taskId }, 'No task found with that id');
        throw TaskNotFound;
      }
      return task;
    },
  }
}