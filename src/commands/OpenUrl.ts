import Command, { Run } from './Command.ts';

interface OpenUrlParams {
  url: string;
}

class OpenUrl extends Command<OpenUrlParams> {
  run: Run<OpenUrlParams> = (params, resolve, reject) => {
    const { url } = params;
    window.open(url, '_blank');
    resolve();
  }
  // TODO: why doesn't TS pick up 'execute' from parent class?
  execute = (params: OpenUrlParams) => {
    this.aexecute.call(this, params);
  }
}

export default OpenUrl;