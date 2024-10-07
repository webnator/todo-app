import taskConfig from '@sandbox/config/task.config';
import TaskStatus from '@sandbox/domain/Task/TaskStatus.enum';
import React, { useEffect, useMemo, useState } from 'react';

interface TaskStatusFilterProps {
  onChange?: (selectedStatus: TaskStatus | undefined) => void;
  disabled?: boolean;
}

function getFilterText(status?: TaskStatus): string {
  if (!status) {
    return 'All';
  }
  return taskConfig.STATUS_TEXTS[status].filterText ?? `${status.charAt(0).toUpperCase()}${status.substring(1).toLowerCase()}`;
};

interface TabProps {
  tabStatus: TaskStatus | undefined;
  selected: TaskStatus | undefined;
  setSelected: (status?: TaskStatus) => void;
  disabled?: boolean;
}

const Tab = ({ disabled, tabStatus, selected, setSelected }: TabProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => setSelected(tabStatus)}
      className={`relative text-lg pb-2 ${
        disabled
          ? 'text-gray-400 cursor-not-allowed'
          : selected === tabStatus
          ? 'text-blue-500 font-semibold'
          : 'text-gray-600 font-light hover:text-slate-400'
      } transition-colors duration-200`}
    >
      {getFilterText(tabStatus)}

      {/* Small underline for active tab */}
      {selected === tabStatus && (
        <span
          className="absolute left-0 right-0 bottom-0 h-1 bg-slate-600 rounded-full"
          style={{ transform: "translateX(0)" }}
        ></span>
      )}
    </button>
  );
}

const TaskStatusFilter: React.FC<TaskStatusFilterProps> = ({ onChange, disabled }) => {
  const [selected, setSelected] = useState<TaskStatus>();

  useEffect(() => {
    onChange && onChange(selected);
  }, [ selected ]);

  const allStatus = Object.values(TaskStatus);

  

  return (
    <div className="flex grow-0">
      <div className="flex grow-0 space-x-6">
        {[ undefined, ...allStatus ].map((status, index) => (
          <Tab
            key={index}
            selected={selected}
            setSelected={setSelected}
            tabStatus={status}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskStatusFilter;