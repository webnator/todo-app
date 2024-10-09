<script lang="ts">
	import TaskStatus from "../types/Task/TaskStatus.enum";

  export let activeFilter: TaskStatus | null;
  export let setFilter: (filter: TaskStatus | null) => void;

  const filters: TaskStatus[] = [TaskStatus.PENDING, TaskStatus.ONGOING, TaskStatus.DONE];
</script>

<div class="filter-tabs">
  <button
    class="filter-tab"
    class:active={activeFilter === null}
    on:click={() => setFilter(null)}
  >
    ALL
  </button>
  {#each filters as filter}
    <button
      class="filter-tab"
      class:active={activeFilter === filter}
      on:click={() => setFilter(filter)}
    >
      {filter}
    </button>
  {/each}
</div>

<style>
  .filter-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .filter-tab {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .filter-tab:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .filter-tab.active {
    background: rgba(255, 255, 255, 0.3);
    font-weight: bold;
  }
</style>
