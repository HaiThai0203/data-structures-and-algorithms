import { Queue } from './array-queue/array-queue';

type QueueContructor = new <T>() => Queue<T>;
export function testQueue(Queue: QueueContructor) {
    it("enqueue() should add a new element to the queue", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.length()).toBe(1);
    });

    it("enqueue() should return true on empty queue",() => {
        const queue = new Queue<number>();
        expect(queue.isEmpty()).toBeTruthy();
    });

    it("isEmpty() should return false or not empty queue", () => {
        const queue = new Queue<number>;
        queue.enqueue(1);
        expect(queue.isEmpty()).toBeFalsy();
    });

    it("peek() should return first value", () => {
        const queue = new Queue<number>;
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
    });

    it("peek() should return null when queue is empty", () => {
        const queue = new Queue<number>;
        expect(queue.peek()).toBe(null);
    });

    it("length() should return the number of elements in the queue", () => {
        const queue = new Queue<number>;
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.length()).toBe(2);
    });

    it("dequeue() should remove the first element", () => {
        const queue = new Queue<number>;
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
    })

    it("dequeue() should throw error on empty queue", () => {
        const queue = new Queue<number>;
        expect(() => queue.dequeue()).toThrow("Queue Underflow")
    })
}