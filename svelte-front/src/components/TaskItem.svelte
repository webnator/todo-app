<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { api } from '../services/api';
  import type { Task } from '../types/Task/Task';
  import type TaskStatus from '../types/Task/TaskStatus.enum';

  export let task: Task;
  export let sharedKey: string;

  const dispatch = createEventDispatcher();

  let isStatusDropdownOpen = false;

  function openTaskDetails() {
    dispatch('openTaskDetails', task);
  }

  function toggleStatusDropdown() {
    isStatusDropdownOpen = !isStatusDropdownOpen;
  }

  async function changeStatus(newStatus: TaskStatus) {
    try {
      await api.updateTaskStatus(sharedKey, task.id, newStatus);
      isStatusDropdownOpen = false;
      dispatch('statusChanged', { taskId: task.id, newStatus });
    } catch (err) {
      console.error('Error updating task status:', err);
    }
  }
</script>

<div class="task-item">
  <button class="task-title" on:click={openTaskDetails}>{task.title}</button>
  <div class="status-container">
    <button class="task-status" on:click={toggleStatusDropdown}>{task.status}</button>
    {#if isStatusDropdownOpen}
      <div class="status-dropdown">
        {#each task.allowedTransitions as status}
          {#if status !== task.status}
            <button class="status-option" on:click={() => changeStatus(status)}>
              {status}
            </button>
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .task-title {
    cursor: pointer;
  }

  .task-title:hover {
    text-decoration: underline;
  }

  .status-container {
    position: relative;
  }

  .task-status {
    font-size: 0.8em;
    padding: 2px 6px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  .status-dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .status-option {
    padding: 5px 10px;
    cursor: pointer;
    color: #333;
  }

  .status-option:hover {
    background: rgba(0, 0, 0, 0.1);
  }
</style>
