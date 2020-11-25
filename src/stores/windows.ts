import { writable } from 'svelte/store';
import XPWindow from '../types/XPWindow';

export const windows = writable<XPWindow[]>([]);