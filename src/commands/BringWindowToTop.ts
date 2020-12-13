import { windows } from '../stores/windows.ts';
import XPWindow from '../types/XPWindow.ts';
import Command, { Run } from './Command.ts';

interface BringWindowToTopParams {
  id: string;
}

class BringWindowToTop extends Command<BringWindowToTopParams> {
  run: Run<BringWindowToTopParams> = (params, resolve, reject) => {
    const { id } = params;
    windows.update(
      (w: XPWindow[]) => {
        const newTopWindow = w.find(t => t.id === id);
        const updatedWindows = w.filter(t => t.id !== id);
        updatedWindows.push(newTopWindow as XPWindow);
        return updatedWindows.map((t: XPWindow, i: number) => ({ ...t, zPos: i }));
      }
    );
    resolve();
  }
  // TODO: why doesn't TS pick up 'execute' from parent class?
  execute = (params: BringWindowToTopParams) => {
    this.aexecute.call(this, params);
  }
}

export default BringWindowToTop;