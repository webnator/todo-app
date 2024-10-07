import statusCodes from 'http-status-codes';
import Response from '../../domain/primitives/Response';

export const ServiceOk = new Response({ code: 'SV20000', statusCode: statusCodes.OK, message: 'Service is OK' });
export const UserRetrievedOk = new Response({ code: 'US20001', statusCode: statusCodes.OK, message: 'User retrieved correctly' });
export const ListRetrievedOk = new Response({ code: 'LI20002', statusCode: statusCodes.OK, message: 'List retrieved correctly' });
export const TasksRetrievedOk = new Response({ code: 'TS20003', statusCode: statusCodes.OK, message: 'Tasks retrieved correctly' });

export const UserLoginOk = new Response({ code: 'US20100', statusCode: statusCodes.CREATED, message: 'User logged in correctly' });
export const UserCreatedOk = new Response({ code: 'US20101', statusCode: statusCodes.CREATED, message: 'User created correctly' });
export const ListCreatedOk = new Response({ code: 'LI20102', statusCode: statusCodes.CREATED, message: 'List created correctly' });
export const TaskCreatedOk = new Response({ code: 'TS20103', statusCode: statusCodes.CREATED, message: 'Task created correctly' });

export const ListUpdatedOk = new Response({ code: 'LI20200', statusCode: statusCodes.ACCEPTED, message: 'List updated correctly' });
export const TaskUpdatedOk = new Response({ code: 'TS20201', statusCode: statusCodes.ACCEPTED, message: 'Task updated correctly' });

