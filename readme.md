# Queue Proccessor

To process a queue centrally. Making it possible to start and stop the process at any time.

This project started to deal with an issue when dispatching messages to SQS and Pub/Sub as the client SDK doesn't handle any asynchronous dispatch messages, when you haven't used `await` to wait for dispatch or when we are using it in another part of the code and the client has many messages.

To avoid lost messages, we need to create a set of messages and send them one by one as quickly as possible.

## Usage

```
import { QueueProccessor } from "queue-proccessor";

async function myHandlerProccessMethod (data: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
}
const queueProccessorNumber = new QueueProccessor<Object>(myHandlerProccessMethod);
queueProccessorNumber.add({id:1})
queueProccessorNumber.add({id:2})
queueProccessorNumber.start()

```

## Methods

### start():void

Start to proccess queue if has message. If is not, keep watch if the queue grows.

### add(data:T):void

To push a new message to be handled

### stop():void

stop the proccess queue.
It is possible to proccess keep running until the current handler message not finish to handle.

## Properties

### isProccessing

`boolean`: true if is proccessing. When `stop` is called, it is possible to proccess keep running until the current handler message not finish to handle.

### isStarted

`boolean`: true if is started

### queueLength

`number` : Current length of queue with no handler messages
