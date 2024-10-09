<script lang="ts">
 import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';

  let name = '';
  let user: Record<string, any> | null = null;
  let isUserLoaded = false;

  onMount(() => {
    if (browser) {
      if ('electron' in window) {
        // Electron environment
        user = JSON.parse((window as any).electron?.getFromStorage('user') || 'null');
      } else {
        // Browser environment
        user = JSON.parse(localStorage.getItem('user') || 'null');
      }
      if (user) {
        goto('/welcome');
      }
    }
    isUserLoaded = true;
  });

  async function handleSubmit() {
    if (name.trim()) {
      try {
        const response = await fetch('/api/public/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName: name }),
        });

        if (response.ok) {
          const responseData = await response.json();
          const user = responseData.data.user;
          const token = responseData.data.token;
          
          // Store the user and token in localStorage
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('authToken', token);

          goto('/welcome');
        } else {
          console.error('Failed to create user');
          // Handle error (e.g., show an error message to the user)
        }
      } catch (error) {
        console.error('Error creating user:', error);
        // Handle error (e.g., show an error message to the user)
      }
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }
</script>

<script lang="ts" context="module">
declare global {
  interface Window {
    electron: {
      // ... rest of the interface ...
    }
  }
}
</script>

{#if isUserLoaded && !user}
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-white mb-6">
        Hey, I haven't seen you around before. What's your name?
      </h1>
      <input
        type="text"
        bind:value={name}
        on:keydown={handleKeydown}
        placeholder="Enter your name"
        class="px-4 py-2 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>
  </div>
{/if}
