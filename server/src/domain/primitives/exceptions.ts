import Response from './Response';
import statusCodes from 'http-status-codes';

export const InternalError = new Response({ code: 'ER50000', statusCode: statusCodes.INTERNAL_SERVER_ERROR, message: 'Internal server error' });

export const UserNotAuthorized = new Response({ code: 'US40100', statusCode: statusCodes.UNAUTHORIZED, message: 'User not authorized to update list' });

export const InvalidCredentials = new Response({ code: 'ER40300', statusCode: statusCodes.FORBIDDEN, message: 'Invalid credentials' });
export const InvalidTaskStatusTransition = new Response({ code: 'TS40301', statusCode: statusCodes.FORBIDDEN, message: 'Invalid status transition for the task' });


export const UserNotFound = new Response({ code: 'US40400', statusCode: statusCodes.NOT_FOUND, message: 'User not found' });
export const ListNotFound = new Response({ code: 'LI40401', statusCode: statusCodes.NOT_FOUND, message: 'List not found' });
export const TaskNotFound = new Response({ code: 'TS40402', statusCode: statusCodes.NOT_FOUND, message: 'Task not found' });
