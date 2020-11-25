import { windows } from '../stores/windows.ts';
import XPWindow from '../types/XPWindow.ts';
import Command, { Run } from './Command.ts';

interface UpdateWindowPositionParams {
  id: string;
  xPos: number;
  yPos: number;
}

class UpdateWindowPosition extends Command<UpdateWindowPositionParams> {
  run: Run<UpdateWindowPositionParams> = (params, resolve, reject) => {
    const { id, xPos, yPos } = params;
    windows.update(
      (w: XPWindow[]) => {
        const index = w.findIndex(t => t.id === id);
        w[index] = { ...w[index], xPos, yPos };
        return w;
      }
    );
    resolve();
  }
  // TODO: why doesn't TS pick up 'execute' from parent class?
  execute = (params: UpdateWindowPositionParams) => {
    this.aexecute.call(this, params);
  }
}

export default UpdateWindowPosition;