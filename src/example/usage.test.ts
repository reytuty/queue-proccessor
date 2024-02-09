import { describe, expect, it } from "@jest/globals";
import { QueueProccessor } from "../index";

const queueProccessorNumber = new QueueProccessor<number>((data: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
});
const queueProccessorString = new QueueProccessor<string>((data: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
});
const queueProccessorObject = new QueueProccessor<object>((data: object) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
});
const queueProccessorArray = new QueueProccessor<any[]>((data: any[]) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
});

describe("Testing QueueProccessor with Numbers", () => {
  it("must to create a queue", () => {
    queueProccessorNumber.add(1);
    queueProccessorNumber.add(2);
    queueProccessorNumber.add(3);
    queueProccessorNumber.add(4);
    expect(queueProccessorNumber.queueLength).toBe(4);
  });
  it("must to start the queue", () => {
    queueProccessorNumber.start();
    expect(queueProccessorNumber.isStarted).toBe(true);
  });
  it("must to proccess the queue", (done) => {
    setTimeout(() => {
      expect(queueProccessorNumber.isProccessing).toBe(false);
      expect(queueProccessorNumber.queueLength).toBe(0);
      done();
    }, 500);
  });
  it("must to add more data to the queue", () => {
    queueProccessorNumber.add(5);
    queueProccessorNumber.add(6);
    queueProccessorNumber.add(7);
    queueProccessorNumber.add(8);
    expect(queueProccessorNumber.queueLength).toBe(4);
  });
  it("must to stop the queue and save some itens to handle", () => {
    queueProccessorNumber.stop();
    expect(queueProccessorNumber.isStarted).toBe(false);
    expect(queueProccessorNumber.queueLength).toBeGreaterThan(0);
  });
  it("must to start the queue again", async () => {
    queueProccessorNumber.start();
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
    expect(queueProccessorNumber.isProccessing).toBe(false);
    expect(queueProccessorNumber.queueLength).toBe(0);
  });
});
describe("Testing QueueProccessor with String", () => {
  it("must to create a queue", () => {
    queueProccessorString.add("the string with 1");
    queueProccessorString.add("the string with 2");
    queueProccessorString.add("the string with 3");
    queueProccessorString.add("the string with 4");
    expect(queueProccessorString.queueLength).toBe(4);
  });
  it("must to start the queue", () => {
    queueProccessorString.start();
    expect(queueProccessorString.isStarted).toBe(true);
  });
  it("must to proccess the queue", (done) => {
    setTimeout(() => {
      expect(queueProccessorString.isProccessing).toBe(false);
      expect(queueProccessorString.queueLength).toBe(0);
      done();
    }, 500);
  });
  it("must to add more data to the queue", () => {
    queueProccessorString.add("the string with 5");
    queueProccessorString.add("the string with 6");
    queueProccessorString.add("the string with 7");
    queueProccessorString.add("the string with 8");
    expect(queueProccessorString.queueLength).toBe(4);
  });
  it("must to stop the queue and save some itens to handle", () => {
    queueProccessorString.stop();
    expect(queueProccessorString.isStarted).toBe(false);
    expect(queueProccessorString.queueLength).toBeGreaterThan(0);
  });
  it("must to start the queue again", async () => {
    queueProccessorString.start();
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
    expect(queueProccessorString.isProccessing).toBe(false);
    expect(queueProccessorString.queueLength).toBe(0);
  });
});

describe("Testing QueueProccessor with Object", () => {
  it("must to create a queue", () => {
    queueProccessorObject.add({ id: 1 });
    queueProccessorObject.add({ id: 2 });
    queueProccessorObject.add({ id: 3 });
    queueProccessorObject.add({ id: 4 });
    expect(queueProccessorObject.queueLength).toBe(4);
  });
  it("must to start the queue", () => {
    queueProccessorObject.start();
    expect(queueProccessorObject.isStarted).toBe(true);
  });
  it("must to proccess the queue", (done) => {
    setTimeout(() => {
      expect(queueProccessorObject.isProccessing).toBe(false);
      expect(queueProccessorObject.queueLength).toBe(0);
      done();
    }, 500);
  });
  it("must to add more data to the queue", () => {
    queueProccessorObject.add({ id: 5 });
    queueProccessorObject.add({ id: 6 });
    queueProccessorObject.add({ id: 7 });
    queueProccessorObject.add({ id: 8 });
    expect(queueProccessorObject.queueLength).toBe(4);
  });
  it("must to stop the queue and save some itens to handle", () => {
    queueProccessorObject.stop();
    expect(queueProccessorObject.isStarted).toBe(false);
    expect(queueProccessorObject.queueLength).toBeGreaterThan(0);
  });
  it("must to start the queue again", async () => {
    queueProccessorObject.start();
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
    expect(queueProccessorObject.isProccessing).toBe(false);
    expect(queueProccessorObject.queueLength).toBe(0);
  });
});

describe("Testing QueueProccessor with Array", () => {
  it("must to create a queue", () => {
    queueProccessorArray.add([1, 2, 3]);
    queueProccessorArray.add([4, 5, 6]);
    queueProccessorArray.add([7, 8, 9]);
    queueProccessorArray.add([10, 11, 12]);
    expect(queueProccessorArray.queueLength).toBe(4);
  });
  it("must to start the queue", () => {
    queueProccessorArray.start();
    expect(queueProccessorArray.isStarted).toBe(true);
  });
  it("must to proccess the queue", (done) => {
    setTimeout(() => {
      expect(queueProccessorArray.isProccessing).toBe(false);
      expect(queueProccessorArray.queueLength).toBe(0);
      done();
    }, 500);
  });
  it("must to add more data to the queue", () => {
    queueProccessorArray.add([13, 14, 15]);
    queueProccessorArray.add([16, 17, 18]);
    queueProccessorArray.add([19, 20, 21]);
    queueProccessorArray.add([22, 23, 24]);
    expect(queueProccessorArray.queueLength).toBe(4);
  });
  it("must to stop the queue and save some itens to handle", () => {
    queueProccessorArray.stop();
    expect(queueProccessorArray.isStarted).toBe(false);
    expect(queueProccessorArray.queueLength).toBeGreaterThan(0);
  });
  it("must to start the queue again", async () => {
    queueProccessorArray.start();
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
    expect(queueProccessorArray.isProccessing).toBe(false);
    expect(queueProccessorArray.queueLength).toBe(0);
  });
});
