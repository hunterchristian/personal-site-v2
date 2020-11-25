import { windows } from '../stores/windows.ts';
import XPWindow from '../types/XPWindow.ts';
import Command, { Run } from './Command.ts';

interface CloseWindowsParams {
  id: string;
}

class CloseWindow extends Command<CloseWindowsParams> {
  run: Run<CloseWindowsParams> = (params, resolve, reject) => {
    const { id } = params;
    windows.update(
      (w: XPWindow[]) =>
        w.filter(t => t.id !== id)
    );
    resolve();
  }
  // TODO: why doesn't TS pick up 'execute' from parent class?
  execute = (params: CloseWindowsParams) => {
    this.aexecute.call(this, params);
  }
}

export default CloseWindow;