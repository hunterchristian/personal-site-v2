import { writable } from 'svelte/store';

export const windows = writable([{
  title: 'Mah window',
  content: '<p>some stuff</p>',
  xPos: 200,
  yPos: 100,
  width: 800,
  height: 600
}]);