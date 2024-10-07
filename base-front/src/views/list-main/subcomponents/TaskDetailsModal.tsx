import Task from '@sandbox/domain/Task/Task';
import TaskHistoryEntry from '@sandbox/domain/Task/TaskHistoryEntry';
import NameAvatar from '@sandbox/infra/components/NameAvatar';
import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import TaskStatusIcon from './TaskStatus';
import moment from 'moment';
import TextInput from '@sandbox/infra/components/TextInput';
import ListContext from '../ListContext';

type TaskDetailsModalProps = {
  task?: Task;
  taskEntries?: TaskHistoryEntry[];
  isOpen: boolean;
  onClose: () => void;
};

const TaskHistory: React.FC<{ fullName: string; children: ReactNode;}> = ({ fullName, children }) => {
  return (
    <div className="flex mb-2 items-center gap-2"> 
      <NameAvatar name={fullName} />
      <span className="text-gray-600 text-sm font-extralight">
        {children}
      </span>
    </div>
  );
};

const HistoryDetail: React.FC<{ entry: TaskHistoryEntry;}> = ({ entry }) => {
  return (
    <TaskHistory fullName={entry.user.fullName}>
      <span className="font-semibold">{entry.user.fullName}</span> moved task to <span className="font-semibold">{entry.to}</span> - <span className="font-regular" title={moment(entry.createdAt).format()}>{moment(entry.createdAt).format('MMM D')}</span>
    </TaskHistory>
  );
};

const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({ task, isOpen, taskEntries, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const context = useContext(ListContext);
  const [ taskTitle, setTaskTitle ] = useState(task?.title);
  const [ taskDescription, setTaskDescription ] = useState(task?.description);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setTaskTitle(task?.title);
    setTaskDescription(task?.description);
  }, [task]);

  if (!isOpen || !task) return null;

  const {
    updateTask
  } = context!;

  function handleClickOutside(event: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  }

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      await updateTask.mutateAsync({
        id: task.id,
        title: taskTitle!,
        description: taskDescription!,
      });
      
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg p-8 w-3/4 max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2 items-center">
            <TaskStatusIcon task={task} onStatusUpdate={(task) => updateTask.mutateAsync(task).then(onClose)} />
          
            <h2 className="text-2xl font-semibold text-gray-900">
              <TextInput
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                onKeyUp={handleKeyPress}
              />
            </h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Created by</span>
            <NameAvatar name={task.user.fullName} />
          </div>
        </div>

        <div className="text-gray-700 mb-6">
          <p className="mb-4">
            <TextInput
              type="text"
              value={taskDescription}
              placeholder="A description about your task..."
              onChange={(e) => setTaskDescription(e.target.value)}
              onKeyUp={handleKeyPress}
            />
          </p>
          <hr className="my-4" />
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-4">Activity</h3>
          <TaskHistory fullName={task.user.fullName}>
            <span className="font-semibold">{task.user.fullName}</span> created this task - <span className="font-regular" title={moment(task.createdAt).format()}>{moment(task.createdAt).format('MMM D')}</span>
          </TaskHistory>
          {taskEntries && taskEntries.map((entry) => (
            <HistoryDetail key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
