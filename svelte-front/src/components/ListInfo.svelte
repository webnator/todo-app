<script lang="ts">
  import { list } from '../stores/list';
  import { api } from '../services/api';

  let editingName = false;
  let newListName = '';
  let copySuccess = false;

  function startEditing() {
    newListName = $list.name;
    editingName = true;
  }

  async function saveListName() {
    if (newListName.trim() && newListName !== $list.name) {
      try {
        await api.updateListName($list.sharedKey, newListName);
        list.update(l => ({ ...l, name: newListName }));
      } catch (err) {
        console.error('Error updating list name:', err);
      }
    }
    editingName = false;
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText($list.sharedKey);
      copySuccess = true;
      setTimeout(() => copySuccess = false, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
</script>

<div class="list-info-row">
  <div class="list-name">
    {#if editingName}
      <input
        type="text"
        bind:value={newListName}
        on:blur={saveListName}
        on:keydown={(e) => e.key === 'Enter' && saveListName()}
      />
    {:else}
      <span>{$list.name}</span>
      <button class="edit-button" on:click={startEditing}>✏️</button>
    {/if}
  </div>
  <div class="list-details">
    <span>Created by: {$list.creatorName}</span>
    <div class="shared-key-container">
      <span class="shared-key">Shared Key: {$list.sharedKey}</span>
      <button class="copy-button" on:click={copyToClipboard}>📋</button>
      {#if copySuccess}
        <span class="copy-success">Copied!</span>
      {/if}
    </div>
  </div>
</div>

<style>
  .list-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .list-name {
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .list-name input {
    font-size: 24px;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-bottom: 2px solid white;
    color: white;
    padding: 4px;
    width: 100%;
  }

  .list-name input:focus {
    outline: none;
  }

  .list-details {
    text-align: right;
  }

  .shared-key {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
  }

  .shared-key-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .copy-button, .edit-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .copy-button:hover, .edit-button:hover {
    opacity: 0.8;
  }

  .copy-success {
    font-size: 14px;
    color: white;
    margin-left: 8px;
  }
</style>
