<script lang="ts">
  import { page } from '$app/stores';
  import { createEventDispatcher } from 'svelte';
  import { api } from '../services/api';
  import type { Task } from '../types/Task/Task';
  import TaskItem from './TaskItem.svelte';

  export let tasks: Task[];
  
  const dispatch = createEventDispatcher();
  
  let sharedKey: string;
  $: sharedKey = $page.params?.sharedKey || '';

  let newTaskName = '';

  async function addNewTask() {
    if (newTaskName.trim() && sharedKey) {
      try {
        await api.addTask(sharedKey, newTaskName);
        newTaskName = '';
      } catch (err) {
        console.error('Error adding task:', err);
      }
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      addNewTask();
    }
  }

  function openTaskDetails(event: CustomEvent<Task>) {
    dispatch('openTaskDetails', event.detail);
  }
</script>

{#if tasks.length > 0}
  <div class="task-list">
    {#each tasks as task (task.id)}
      <TaskItem 
        {task} 
        {sharedKey} 
        on:openTaskDetails={openTaskDetails}
      />
    {/each}
  </div>
{/if}

<div class="task-input-container">
  <input
    type="text"
    bind:value={newTaskName}
    placeholder="New task name"
    on:keydown={handleKeydown}
  />
</div>

<style>
  .task-list {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 15px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
  }

  .task-input-container {
    margin-top: 20px;
    padding: 15px;
    border: 2px dashed rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
  }

  .task-input-container input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 4px;
    color: white;
  }

  .task-input-container input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .task-input-container input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
  }
</style>
