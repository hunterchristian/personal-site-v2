import { v4 as uuidv4 } from 'uuid';
import { windows } from '../stores/windows.ts';
import XPWindow from '../types/XPWindow.ts';
import Command, { Run } from './Command.ts';

class CreateNewWindow extends Command<XPWindow> {
  run: Run<XPWindow> = (params, resolve, reject) => {
    const isSmallWindow = window.innerWidth < 600 || window.innerHeight < 800;
    windows.update(
      (w: XPWindow[]) =>
        w.concat([{
          ...params,
          id: uuidv4(),
          xPos: isSmallWindow ? 0 : (w.length * 20) + 300,
          yPos: isSmallWindow ? 0 : (w.length * 35) + 50,
          width: isSmallWindow ? window.innerWidth : params.width,
          height: isSmallWindow ? window.innerHeight : params.height,
          zPos: w.length + 1
        } as XPWindow])
    );
    resolve();
  }
  // TODO: why doesn't TS pick up 'execute' from parent class?
  execute = (params: XPWindow) => {
    this.aexecute.call(this, params);
  }
}

export default CreateNewWindow;