import container, { Dependencies } from '../../../container';

const listController = container.resolve('listController') as Dependencies['listController'];

export = listController;
