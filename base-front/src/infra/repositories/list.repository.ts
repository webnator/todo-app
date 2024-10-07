import serverConfig from "@sandbox/config/server.config";
import List from "@sandbox/domain/List/List";
import ListRepositoryInterface from "@sandbox/services/abstractions/list.repository.interface";
import { Dependencies } from "../ioc/container";
import BaseResponse from "./BaseResponse";
import Task from "@sandbox/domain/Task/Task";

const listRepository = ({ userRepository }: Dependencies): ListRepositoryInterface => ({
  async createList() {
    const response = await fetch(`${serverConfig.URL}${serverConfig.ROUTES.LISTS}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRepository.getCachedUserToken()}`
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error('Failed to create list');
    }

    const responseBody = await response.json() as BaseResponse<{ list: List }>;
    return responseBody.data!.list;
  },

  async getListByKey(sharedKey) {
    const response = await fetch(`${serverConfig.URL}${serverConfig.ROUTES.LISTS}/${sharedKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRepository.getCachedUserToken()}`
      },
    });

    if (!response.ok) {
      throw new Error('Failed to retrieve list');
    }

    const responseBody = await response.json() as BaseResponse<{ list: List }>;
    return responseBody.data!.list;
  },

  async getTasksForList(sharedKey) {
    const response = await fetch(`${serverConfig.URL}${serverConfig.ROUTES.TASKS(sharedKey)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRepository.getCachedUserToken()}`
      },
    });

    if (!response.ok) {
      throw new Error('Failed to retrieve list');
    }

    const responseBody = await response.json() as BaseResponse<{ tasks: Task[] }>;
    return responseBody.data!.tasks;
  },

  async updateList(list) {
    const response = await fetch(`${serverConfig.URL}${serverConfig.ROUTES.LISTS}/${list.sharedKey}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRepository.getCachedUserToken()}`
      },
      body: JSON.stringify({
        name: list.name ?? undefined,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update list');
    }

    const responseBody = await response.json() as BaseResponse<{ list: List }>;
    return responseBody.data!.list;
  },

});

export default listRepository;
