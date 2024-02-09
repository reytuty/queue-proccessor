/**
 * @author Renato Miawaki
 * @class QueueProccessor
 * @description A class to handle a queue of data to proccess
 */
export declare class QueueProccessor<T> {
    protected proccessor: (data: T) => Promise<any>;
    private queue;
    private proccessing;
    private started;
    private procccessLoopId;
    constructor(proccessor: (data: T) => Promise<any>);
    start(): void;
    protected startCheck(): void;
    get isProccessing(): boolean;
    get isStarted(): boolean;
    get queueLength(): number;
    private stopCheck;
    private checkQueue;
    add(data: T): void;
    private proccess;
    private proccessQueue;
    stop(): void;
}
