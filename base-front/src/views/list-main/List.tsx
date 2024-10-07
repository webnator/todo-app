'use client';
import Task from '@sandbox/domain/Task/Task';
import TaskStatus from '@sandbox/domain/Task/TaskStatus.enum';
import CopyTag from '@sandbox/infra/components/CopyTag';
import NameAvatar from '@sandbox/infra/components/NameAvatar';
import TextInput from '@sandbox/infra/components/TextInput';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import ListContext from './ListContext';
import EmptyTask from './subcomponents/EmptyTask';
import TaskDetailsModal from './subcomponents/TaskDetailsModal';
import TaskItem from './subcomponents/TaskItem';
import TaskStatusFilter from './subcomponents/TaskStatusFilter';

const List = (): JSX.Element => {
  const context = useContext(ListContext);
  const router = useRouter();
  const [ statusFilter, setStatusFilter ] = useState<TaskStatus>();
  const [ filteredTasks, setTasks ] = useState<Task[]>([]);
  const [ listName, setListName ] = useState<string>('No name');
  const [ selectedTask, setSelectedTask ] = useState<Task>();
  const [ isTaskDetailsModalOpen, setTaskDetailsModalOpen ] = useState<boolean>(false);
  
  const {
    data: {
      listQuery: { data: list },
      tasksQuery: { data: tasks },
      user: loggedUser,
      hasLoaded,
    },
    createTask,
    updateTask,
    updateList,
    useTaskHistory,
  } = context!;

  const { data: taskHistory } = useTaskHistory(selectedTask?.id);

  if (hasLoaded && !list) {
    router.replace('/welcome');
  }

  useEffect(() => {
    if (statusFilter === undefined) {
      return setTasks(tasks ?? []);
    }
    return setTasks(tasks?.filter(task => task.status === statusFilter) ?? []);
  }, [ tasks, statusFilter ]);

  useEffect(() => {
    setListName(list?.name ?? 'No name');
  }, [ list ]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && listName.trim()) {
      updateList.mutate({
        ...list!,
        name: listName,
      })
    }
  };

  function openTaskModal(task: Task): void {

    setSelectedTask(task);
    setTaskDetailsModalOpen(true);
  }

  return (
    <div className="flex h-screen">
      <main className="">
      { hasLoaded && list && 
        <div className="flex flex-col px-20 pt-12 w-screen">
          <div className="flex">
            <span className="underline text-sm text-gray-400 cursor-pointer" onClick={() => router.replace('/welcome')}>Go back</span>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row text-2xl items-center">
              <TextInput
                type="text"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                onKeyUp={handleKeyPress}
              />
            </div>
            <div className="flex flex-col space-y-2 justify-end">
              <div className="flex items-center space-x-2"><span>Created by</span> <NameAvatar name={list!.user.fullName} /></div>
              <div className="flex items-center space-x-2"><span>Share key</span> <CopyTag text={list!.sharedKey} /></div>
            </div>
            
          </div>
          
          <div className="mt-6">
            <TaskStatusFilter onChange={setStatusFilter} disabled={!tasks || tasks.length === 0} />
          </div>
          <hr className="border-slate-400"/>
          
          { (!tasks || tasks.length === 0) &&
            <div
              className="mt-6 mb-4 font-light text-lg text-center leading-relaxed italic text-gray-400"
              data-testid="div-empty-tasks"
            >
              You don&apos;t have any tasks yet. Start by creating one
            </div>
          }

          { filteredTasks.length > 5 && <EmptyTask user={loggedUser!} onSubmit={createTask.mutate} /> }
          { filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} onSubmit={updateTask.mutate} onClick={() => openTaskModal(task)}  />
          )) 
          }

          <EmptyTask user={loggedUser!} onSubmit={createTask.mutate} />
        </div>
      }
      <TaskDetailsModal
        task={selectedTask}
        taskEntries={taskHistory}
        isOpen={isTaskDetailsModalOpen}
        onClose={() => setTaskDetailsModalOpen(false)}
      />
      </main>
    </div>
  );
};

export default List;
