import User from '@sandbox/domain/User/User';
import NameAvatar from '@sandbox/infra/components/NameAvatar';
import React, { useState } from 'react';

type EmptyTaskProps = {
  user: User;
  onSubmit?: (taskName: string) => void;
}

const EmptyTask: React.FC<EmptyTaskProps> = ({ user, onSubmit }) => {
  const [taskName, setTaskName] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && taskName.trim()) {
      onSubmit && onSubmit(taskName);
      setTaskName('');
    }
  };
  
  return (
    <div className="flex items-center justify-between w-full bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 mt-2 shadow-sm">
      <div className="flex items-center">
        <div className="w-8 h-8 border-2 border-dashed border-gray-300 rounded-full mr-4"></div>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="New task name..."
          className="bg-transparent w-full border-none outline-none placeholder-gray-500 text-gray-700"
        />
      </div>
      <NameAvatar name={user.fullName} />
    </div>
  );
};

export default EmptyTask;