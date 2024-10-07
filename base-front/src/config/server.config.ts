const serverConfig = {
  URL: process.env.REACT_APP_SERVER_URL ?? 'http://localhost:8080',
  SOCKET_URL: process.env.REACT_APP_SERVER_SOCKET_URL ?? 'ws://127.0.0.1:8080',
  ROUTES: {
    CREATE_USER: '/public/users',
    LOGIN_WITH_CODE: '/public/login',
    LISTS: '/lists',
    TASKS: (sharedKey: string) => `/lists/${sharedKey}/tasks`,
    TASK_HISTORY: (sharedKey: string, taskId: number) => `/lists/${sharedKey}/tasks/${taskId}/history-entries`,
  }
};

export default serverConfig;
