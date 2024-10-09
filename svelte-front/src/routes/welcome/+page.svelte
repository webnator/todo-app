<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let userName = '';
  let joinCode = '';
  let isCreatingList = false;
  let showCodeInput = false;

  onMount(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user) {
      goto('/');
      return;
    }
    userName = user.fullName || '';
  });

  async function createNewList() {
    isCreatingList = true;
    try {
      const response = await fetch('/api/lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
      });

      if (response.ok) {
        const data = await response.json();
        const sharedKey = data.data.list.sharedKey;
        goto(`/lists/${sharedKey}`);
      } else {
        console.error('Failed to create list');
        // Handle error (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error('Error creating list:', error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      isCreatingList = false;
    }
  }

  function showCodeInputField() {
    showCodeInput = true;
  }

  function joinExistingList() {
    if (joinCode.trim()) {
      goto(`/lists/${joinCode}`);
    }
  }
</script>

{#if userName}
  <div class="container">
    <div class="content">
      <h1>Welcome {userName}!</h1>
      <p>Are you here to start a new task list? Or do you have a code for an existing one?</p>

      {#if !showCodeInput}
        <div class="button-row">
          <button on:click={createNewList} disabled={isCreatingList}>
            {isCreatingList ? 'Creating...' : 'New one'}
          </button>
          <button on:click={showCodeInputField}>I have a code</button>
        </div>
      {:else}
        <p>Great! Please enter the code:</p>
        <input 
          type="text" 
          bind:value={joinCode} 
          placeholder="Enter list code"
          on:keydown={(e) => e.key === 'Enter' && joinExistingList()}
        />
        <button on:click={joinExistingList}>Join List</button>
      {/if}
    </div>
  </div>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: Arial, sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
  }

  .content {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 2em;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 1em;
  }

  .button-row {
    display: flex;
    gap: 1em;
    justify-content: center;
  }

  button {
    padding: 0.7em 1.5em;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }

  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  input {
    margin-bottom: 1em;
    padding: 0.7em;
    font-size: 1em;
    width: 100%;
    border: none;
    border-radius: 5px;
  }
</style>
