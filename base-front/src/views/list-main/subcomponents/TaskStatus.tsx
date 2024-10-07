import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import taskConfig from '@sandbox/config/task.config';
import Task from '@sandbox/domain/Task/Task';
import TaskStatus from '@sandbox/domain/Task/TaskStatus.enum';
import React, { useEffect, useRef, useState } from 'react';

interface TaskStatusIconProps {
  task: Task;
  onStatusUpdate?: (task: Task) => void;
  isDisabled?: boolean;
}

const TaskStatusIcon: React.FC<TaskStatusIconProps> = ({ task, onStatusUpdate, isDisabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const togglePanel = () => {
    isDisabled !== true && setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  function updateStatus(status: TaskStatus): void {
    onStatusUpdate && onStatusUpdate({
      ...task,
      status,
    });
    setIsOpen(false);
  }

  function getStatusColor(status: TaskStatus): string {
    return taskConfig.STATUS_TEXTS[status]?.listIconColor ?? '#94a3b8';
  }
  
  return (
    <div className="relative" ref={panelRef}>
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full text-white text-md font-semibold transition-colors ${!isDisabled && 'cursor-pointer'}`}
        style={{
          backgroundColor: getStatusColor(task.status),
        }}
        onClick={togglePanel}
      >
        <FontAwesomeIcon icon={taskConfig.STATUS_TEXTS[task.status]?.listIcon ?? faMinus} />
      </div>
      {isOpen && (
        <div className="absolute top-6 left-0 mt-2 w-40 text-sm bg-white border border-gray-300 rounded-md shadow-lg p-2 z-50">
          <ul>
            { task.allowedTransitions.map((transitionStatus, index) => (
              <li key={index} className={`p-2 hover:bg-gray-100 cursor-pointer text-${getStatusColor(transitionStatus)}`} onClick={() => updateStatus(transitionStatus)}>
                <FontAwesomeIcon icon={taskConfig.STATUS_TEXTS[transitionStatus]?.listIcon ?? faMinus} /> 
                <span className="ml-4">{transitionStatus}</span>
              </li>
            ))
            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskStatusIcon;