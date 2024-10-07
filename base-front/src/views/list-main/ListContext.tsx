'use client';
import cacheConfig from '@sandbox/config/cache.config';
import List from '@sandbox/domain/List/List';
import Task from '@sandbox/domain/Task/Task';
import TaskHistoryEntry from '@sandbox/domain/Task/TaskHistoryEntry';
import User from '@sandbox/domain/User/User';
import { useDependency } from '@sandbox/infra/react/useDependency';
import { useWebSocketContext } from '@sandbox/infra/react/WebsocketContext';
import { TaskToUpdate } from '@sandbox/services/abstractions/task.repository.interface';
import { QueryKey, useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { createContext, PropsWithChildren, useEffect } from 'react';

interface ListContext {
  data: {
    listQuery: UseQueryResult<List | undefined, Error>;
    tasksQuery: UseQueryResult<Task[] | undefined, Error>;
    user: User | undefined;
    hasLoaded: boolean;
  };
  createTask: UseMutationResult<Task, Error, string, unknown>;
  updateTask: UseMutationResult<Task, Error, TaskToUpdate, unknown>;
  updateList: UseMutationResult<List, Error, List, unknown>;
  useTaskHistory: (taskId?: number) => UseQueryResult<TaskHistoryEntry[] | undefined, Error>;
}

const { BASE_KEYS: BASE_QUERY_KEYS } = cacheConfig;

const ListContext = createContext<ListContext | undefined>(undefined);

export default ListContext;

export const ListProvider = ({ children, listKey }: PropsWithChildren & { listKey: string; }) => {
  const queryClient = useQueryClient();
  const { lastJsonMessage: serverMessage, readyState } = useWebSocketContext();

  const listRepository = useDependency('listRepository');
  const userRepository = useDependency('userRepository');
  const taskRepository = useDependency('taskRepository');

  useEffect(() => {
    if (!serverMessage) {
      return;
    }
    if (serverMessage.entityType === 'LIST' && serverMessage.action === 'UPDATE' && serverMessage.id === listKey) {
      setList(serverMessage.entity as List);
    }

    if (serverMessage.entityType === 'TASK' && serverMessage.action === 'UPDATE' && (serverMessage.entity as Task).listKey === listKey) {
      updateTask(serverMessage.entity as Task);
    }

    if (serverMessage.entityType === 'TASK' && serverMessage.action === 'CREATE' && (serverMessage.entity as Task).listKey === listKey) {
      addTask(serverMessage.entity as Task);
    }
    
  }, [readyState, serverMessage]);
  
  const listQuery = useQuery<List | undefined>({
    queryKey: [ BASE_QUERY_KEYS.list ],
    queryFn: () => listRepository.getListByKey(listKey),
  });

  const tasksQuery = useQuery<Task[] | undefined>({
    queryKey: [ BASE_QUERY_KEYS.tasks, listKey ],
    queryFn: () => listRepository.getTasksForList(listKey),
  });

  const useTaskHistory = (taskId?: number) => {
    return useQuery<TaskHistoryEntry[] | undefined>({
      queryKey: [BASE_QUERY_KEYS.taskHistory, taskId],
      queryFn: () => taskRepository.getTaskHistory(listKey, taskId!),
      enabled: !!taskId,
      staleTime: 500,
    });
  }

  const createTaskMutation = useMutation({
    mutationFn: (title: string) => taskRepository.createTask(listKey, title),
  });

  const updateTaskMutation = useMutation({
    mutationFn: (task: TaskToUpdate) => taskRepository.updateTask(listKey, task),
  });

  const updateListMutation = useMutation({
    mutationFn: (list: List) => listRepository.updateList(list),
  });

  function updateTask(newTask: Task): void {
    const currentTasks = queryClient.getQueryData<unknown, QueryKey, Task[]>([BASE_QUERY_KEYS.tasks, listKey]);
    const editedTaskIndex = currentTasks?.findIndex(task => task.id === newTask.id);
    if (currentTasks && editedTaskIndex! >= 0) {
      currentTasks[editedTaskIndex!] = newTask;
      queryClient.setQueryData([BASE_QUERY_KEYS.tasks, listKey], () => [ ...currentTasks ]);
    } else {
      queryClient.invalidateQueries({ queryKey: [BASE_QUERY_KEYS.tasks, listKey] });
    }
  }

  function addTask(newTask: Task): void {
    const currentTasks = queryClient.getQueryData([BASE_QUERY_KEYS.tasks, listKey]) as Task[];
    if (!currentTasks?.find(task => task.id === newTask.id)) {
      queryClient.setQueryData([BASE_QUERY_KEYS.tasks, listKey], () => [...currentTasks, newTask]);
    }
  }

  function setList(list: List): void {
    queryClient.setQueryData([BASE_QUERY_KEYS.list], list);
  }

  const value: ListContext = {
    data: {
      listQuery,
      tasksQuery,
      user: userRepository.getLoggedUser(),
      hasLoaded: listQuery.isSuccess && tasksQuery.isSuccess,
    },
    createTask: createTaskMutation,
    updateTask: updateTaskMutation,
    updateList: updateListMutation,
    useTaskHistory,
  };

  return (
    <ListContext.Provider value={value}>
      {children}
    </ListContext.Provider>
  );
};
