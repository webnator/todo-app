import container, { Dependencies } from '../../../container';

const taskController = container.resolve('taskController') as Dependencies['taskController'];

export = taskController;
