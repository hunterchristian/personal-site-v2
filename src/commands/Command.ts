import { ENABLE_DEBUG_LOGGING } from '../appConfig.ts';

export type Run<T> = (params: T, resolve: () => void, reject: () => void) => void;
abstract class Command<T> {
  abstract run: Run<T>;
  aexecute = (params: T) => new Promise((resolve, reject) => {
    if (ENABLE_DEBUG_LOGGING) {
      console.log(`COMMAND: ${this.constructor.name}, params: ${JSON.stringify(params, null, 2)}`)
    }
    this.run(params || {} as T, resolve, reject);
  });
}

export default Command;