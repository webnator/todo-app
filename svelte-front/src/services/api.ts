export const API_BASE_URL = '/api';

async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers);
  headers.append('Authorization', `Bearer ${localStorage.getItem('authToken')}`);
  
  const response = await fetch(`${API_BASE_URL}${url}`, { ...options, headers });
  
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  
  return response.json();
}

export const api = {
  fetchListData: (sharedKey: string) => fetchWithAuth(`/lists/${sharedKey}`),
  fetchTasks: (sharedKey: string) => fetchWithAuth(`/lists/${sharedKey}/tasks`),
  updateListName: (sharedKey: string, name: string) => fetchWithAuth(`/lists/${sharedKey}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  }),
  addTask: (sharedKey: string, title: string) => fetchWithAuth(`/lists/${sharedKey}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  }),
  updateTaskStatus: (sharedKey: string, taskId: number, status: string) => fetchWithAuth(`/lists/${sharedKey}/tasks/${taskId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  }),
  fetchTaskHistory: (sharedKey: string, taskId: number) => fetchWithAuth(`/lists/${sharedKey}/tasks/${taskId}/history-entries`)
};
