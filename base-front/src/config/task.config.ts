import { faCheck, faClock, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TaskStatus from "@sandbox/domain/Task/TaskStatus.enum";

const taskConfig = {
  STATUS_TEXTS: {
    [ TaskStatus.PENDING ]: {
      filterText: 'Pending',
      listIcon: faClock,
      listIconColor: '#9ca3af',
    },
    [ TaskStatus.ONGOING ]: {
      filterText: 'Ongoing',
      listIcon: faSpinner,
      listIconColor: '#60a5fa',
    },
    [ TaskStatus.DONE ]: {
      filterText: 'Done',
      listIcon: faCheck,
      listIconColor: '#34d399',
    },
  }
};

export default taskConfig;
