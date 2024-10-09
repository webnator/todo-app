import { writable } from 'svelte/store';

export const list = writable({
  name: 'Loading...',
  creatorName: '',
  sharedKey: ''
});
