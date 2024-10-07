import Task from '@sandbox/domain/Task/Task';
import NameAvatar from '@sandbox/infra/components/NameAvatar';
import React from 'react';
import TaskStatusIcon from './TaskStatus';
import moment from 'moment';

type TaskItemProps = {
  task: Task;
  onSubmit?: (task: Task) => void;
  onClick?: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onClick, onSubmit }) => {
  return (
    <div className="flex items-center justify-between w-full bg-white border border-gray-200 rounded-lg p-4 mt-2 shadow-sm">
      <div className="flex items-center">
        <TaskStatusIcon task={task} onStatusUpdate={onSubmit}/>
        <p className="ml-4 text-gray-500 cursor-pointer" onClick={() => onClick && onClick()}>{task.title}</p>
      </div>
      <div className="flex items-center">
        <p className="ml-4 text-slate-300 text-sm mr-4">{moment(task.updatedAt).format('MMM D')}</p>
        <NameAvatar name={task.user.fullName} />
      </div>
      
    </div>
  );
};

export default TaskItem;