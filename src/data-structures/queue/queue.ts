/**
 * This is an array-based implementation of a Queue.
 * A Queue is a data structure that follows the FIFO (First In First Out) principle.
 * It means that the first element that was added to the queue will be the first one to be removed.
 * The time complexity of the operations is O(n).
 */

import { IQueue } from "./queue.interface";

export class Queue<T> implements IQueue<T> {
    private queue: T[] = [];
    /**
     * Adds an element to the queue.
     */
    enqueue(value: T): void {
        this.queue.push(value);
    }
    /**
     * Removes an element from the queue and returns it
     */
    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        return this.queue.shift() as T;
    }
    /**
     * Returns the element at the front of the queue.
     */
    peek(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0];
    }
    /**
     * Checks if the queue is empty.
     */
    isEmpty(): boolean {
        return this.queue.length === 0;
    }
    /**
     * Returns the number of element in the queue.
     */
    length(): number {
        return this.queue.length;
    }
}