import serverConfig from "@sandbox/config/server.config";
import List from "@sandbox/domain/List/List";
import ListRepositoryInterface from "@sandbox/services/abstractions/task.repository.interface";
import { Dependencies } from "../ioc/container";
import BaseResponse from "./BaseResponse";
import Task from "@sandbox/domain/Task/Task";
import TaskRepositoryInterface from '@sandbox/services/abstractions/task.repository.interface';
import TaskHistoryEntry from '@sandbox/domain/Task/TaskHistoryEntry';

const taskRepository = ({ userRepository }: Dependencies): TaskRepositoryInterface => ({
  async createTask(listKey, title) {
    const response = await fetch(`${serverConfig.URL}${serverConfig.ROUTES.TASKS(listKey)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRepository.getCachedUserToken()}`
      },
      body: JSON.stringify({
        title,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create task');
    }

    const responseBody = await response.json() as BaseResponse<{ task: Task }>;
    return responseBody.data!.task;
  },

  async updateTask(listKey, task) {
    const response = await fetch(`${serverConfig.URL}${serverConfig.ROUTES.TASKS(listKey)}/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRepository.getCachedUserToken()}`
      },
      body: JSON.stringify({
        title: task.title ?? undefined,
        description: task.description ?? undefined,
        status: task.status ?? undefined,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update task');
    }

    const responseBody = await response.json() as BaseResponse<{ task: Task }>;
    return responseBody.data!.task;
  },

  async getTaskHistory(sharedKey, taskId) {
    const response = await fetch(`${serverConfig.URL}${serverConfig.ROUTES.TASK_HISTORY(sharedKey, taskId)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRepository.getCachedUserToken()}`
      },
    });

    if (!response.ok) {
      throw new Error('Failed to retrieve list');
    }

    const responseBody = await response.json() as BaseResponse<{ taskHistoryEntries: TaskHistoryEntry[] }>;
    return responseBody.data!.taskHistoryEntries;
  },

});

export default taskRepository;
