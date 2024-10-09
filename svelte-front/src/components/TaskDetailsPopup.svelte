<script lang="ts">
  import { onMount } from 'svelte';
	import type { Task } from '../types/Task/Task';
	import { api } from '../services/api';

  export let task: Task;
  export let onClose: () => void;
  export let sharedKey: string;

  let historyEntries: any[] = [];
  let loading = true;
  let error = '';

  onMount(async () => {
    await fetchHistoryEntries();
  });

  async function fetchHistoryEntries() {
    try {
      const fetchedEntries = await api.fetchTaskHistory(sharedKey, task.id);
      
      // Create the "task created" entry
      const createdEntry = {
        id: 'created',
        user: task.user,
        action: 'CREATED',
        createdAt: task.createdAt
      };

      // Combine the "created" entry with fetched entries
      historyEntries = [createdEntry, ...fetchedEntries.data.taskHistoryEntries];
    } catch (err) {
      console.error('Error fetching history entries:', err);
      error = 'Failed to load history entries. Please try again.';
    } finally {
      loading = false;
    }
  }

  function handleOutsideClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
</script>


<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="popup-overlay" on:click={handleOutsideClick} role="dialog">
  <div class="popup-content">
    <button class="close-button" on:click={onClose}>&times;</button>
    <h2>{task.title}</h2>
    <p>Status: {task.status}</p>
    <p>Created at: {new Date(task.createdAt).toLocaleString()}</p>
    <p>Updated at: {new Date(task.updatedAt).toLocaleString()}</p>

    <hr class="separator" />

    <h3>History Entries</h3>
    {#if loading}
      <p>Loading history entries...</p>
    {:else if error}
      <p class="error">{error}</p>
    {:else if historyEntries.length === 0}
      <p>No history entries found for this task.</p>
    {:else}
      <ul class="history-list">
        {#each historyEntries as entry (entry.id)}
          <li class="history-item">
            {#if entry.action === 'CREATED'}
              <span class="history-user">{entry.user.fullName}</span> created this task
            {:else}
              <span class="history-user">{entry.user.fullName}</span> changed status from 
              <span class="history-status">{entry.from}</span> to 
              <span class="history-status">{entry.to}</span>
            {/if}
            <span class="history-date">on {new Date(entry.createdAt).toLocaleString()}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-content {
    background-color: #333;
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
    width: 90%;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    max-height: 80vh;
    overflow-y: auto;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #fff;
  }

  h2, h3 {
    margin-top: 0;
    color: #fff;
  }

  p {
    color: #ccc;
    margin: 10px 0;
  }

  .separator {
    border: none;
    border-top: 1px solid #555;
    margin: 20px 0;
  }

  .history-list {
    list-style-type: none;
    padding: 0;
  }

  .history-item {
    margin-bottom: 10px;
    font-size: 0.9em;
  }

  .history-user {
    font-weight: bold;
  }

  .history-status {
    font-style: italic;
  }

  .history-date {
    display: block;
    font-size: 0.8em;
    color: #999;
  }

  .error {
    color: #ff6b6b;
  }
</style>
