import { windows } from '../stores/windows.ts';
import XPWindow from '../types/XPWindow.ts';
import Command, { Run } from './Command.ts';

interface UpdateWindowSizeParams {
  id: string;
  width: number;
  height: number;
}

class UpdateWindowSize extends Command<UpdateWindowSizeParams> {
  run: Run<UpdateWindowSizeParams> = (params, resolve, reject) => {
    const { id, width, height } = params;
    windows.update(
      (w: XPWindow[]) => {
        const index = w.findIndex(t => t.id === id);
        w[index] = { ...w[index], width, height };
        return w;
      }
    );
    resolve();
  }
  // TODO: why doesn't TS pick up 'execute' from parent class?
  execute = (params: UpdateWindowSizeParams) => {
    this.aexecute.call(this, params);
  }
}

export default UpdateWindowSize;