/**
 * @author Renato Miawaki
 * @class QueueProccessor
 * @description A class to handle a queue of data to proccess
 */
export class QueueProccessor<T> {
  private queue: T[] = [];
  private proccessing = false;
  private started: boolean = false;
  private procccessLoopId: any = null;
  constructor(protected proccessor: (data: T) => Promise<any>) {}
  start() {
    if (this.started || this.proccessing) {
      return;
    }
    this.started = true;
    if (this.queue.length) {
      this.proccessQueue();
      return;
    }
    if (this.procccessLoopId) {
      clearInterval(this.procccessLoopId);
    }
    this.procccessLoopId = setInterval(() => {
      this.checkQueue();
    }, 100);
  }
  public get isProccessing() {
    return this.proccessing;
  }
  public get isStarted() {
    return this.started;
  }
  public get queueLength() {
    return this.queue.length;
  }
  private stopCheck() {
    clearInterval(this.procccessLoopId);
    this.procccessLoopId = null;
  }
  private checkQueue() {
    if (!this.started) {
      this.stopCheck();
      return;
    }
    if (this.queue.length) {
      this.proccessQueue();
      this.stopCheck();
    }
  }
  add(data: T) {
    this.queue.push(data);
  }
  private async proccess(data: T) {
    return await this.proccessor(data);
  }
  private async proccessQueue() {
    this.proccessing = true;
    while (this.queue.length && this.started) {
      const data = this.queue.shift();
      if (data) {
        await this.proccess(data);
      }
    }
    this.proccessing = false;
    if (this.started) {
      return this.checkQueue();
    }
  }
  stop() {
    this.started = false;
    this.stopCheck();
  }
}
