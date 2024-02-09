# Queue Proccessor

To proccess a queue and handle be able to start and stop the proccess.

This project starts to deal with a problem to dispatch message to SQS and Pub/Sub but the client sdk doesn't deal with no async dispatch messages, when you didn't use `await` to wait dispatch or when we are using in another part of the code and the client has to much messages.

To void lost messages we need to create a pool of messages and send one by one, quickly than as possible.

## Usage

```
import { QueueProccessor } from "../index";

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
