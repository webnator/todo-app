<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { page } from '$app/stores';
  import { tasks } from '../../../stores/tasks';
  import { list } from '../../../stores/list';
  import { api } from '../../../services/api';
  import { WebSocketService } from '../../../services/websocket';
  import TaskDetailsPopup from '../../../components/TaskDetailsPopup.svelte';
  import FilterTabs from '../../../components/FilterTabs.svelte';
	import ListInfo from '../../../components/ListInfo.svelte';
	import TaskList from '../../../components/TaskList.svelte';

	import type TaskStatus from '../../../types/Task/TaskStatus.enum';
	import type { Task } from '../../../types/Task/Task';


  let sharedKey = $page.params.sharedKey;
  let error = '';
  let activeFilter: TaskStatus | null = null;
  let selectedTask: Task | null = null;
  let webSocketService: WebSocketService;

  $: filteredTasks = $tasks.filter(task => 
    activeFilter === null || task.status === activeFilter
  );

  onMount(async () => {
    await fetchListData();
    await fetchTasks();
    initializeWebSocket();
  });

  onDestroy(() => {
    if (webSocketService) {
      webSocketService.close();
    }
  });

  async function fetchListData() {
    try {
      const data = await api.fetchListData(sharedKey);
      list.set({
        name: data.data.list.name || 'Unnamed List',
        creatorName: data.data.list.user.fullName || 'Unknown',
        sharedKey
      });
    } catch (err) {
      console.error('Error fetching list:', err);
      error = 'Failed to load list data. Please try again.';
    }
  }

  async function fetchTasks() {
    try {
      const data = await api.fetchTasks(sharedKey);
      tasks.set(data.data.tasks);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      error = 'Failed to load tasks. Please try again.';
    }
  }

  function initializeWebSocket() {
    webSocketService = new WebSocketService();
    webSocketService.connect('ws://localhost:8080');
    webSocketService.setMessageHandler(handleWebSocketMessage);
  }

  function handleWebSocketMessage(message: any) {
    if (message.entityType === 'TASK' && message.entity.listKey === sharedKey) {
      if (message.action === 'CREATE') {
        tasks.add(message.entity);
      } else if (message.action === 'UPDATE') {
        tasks.updateStatus(message.id, message.entity.status);
      }
    } else if (message.entityType === 'LIST' && message.id === sharedKey) {
      if (message.action === 'UPDATE') {
        list.update(l => ({ ...l, name: message.entity.name }));
      }
    }
  }

  function setFilter(filter: TaskStatus | null) {
    activeFilter = filter;
  }

  function openTaskDetails(task: Task) {
    selectedTask = task;
  }

  function closeTaskDetails() {
    selectedTask = null;
  }
</script>

<div class="container">
  <div class="top-row">
    <a href="/welcome" class="back-link">← Back to Welcome</a>
  </div>

  {#if error}
    <div class="error">{error}</div>
  {:else}
    <ListInfo />
    <hr class="separator" />
    <FilterTabs {activeFilter} {setFilter} />
    <TaskList
      tasks={filteredTasks}
      on:openTaskDetails={(event) => openTaskDetails(event.detail)}/>
  {/if}

  {#if selectedTask}
    <TaskDetailsPopup task={selectedTask} onClose={closeTaskDetails} {sharedKey} />
  {/if}
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: white;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .top-row {
    margin-bottom: 20px;
  }

  .back-link {
    color: white;
    text-decoration: none;
  }

  .back-link:hover {
    text-decoration: underline;
  }

  .separator {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    margin: 20px 0;
  }
</style>