import { IQueue } from "../queue.interface";


export class CircularQueue<T> implements IQueue<T> {
    private queue: T[];
    private front: number;
    private size: number;
    private rear: number;

    constructor(size: number) {
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }

    /**
     * Adds an element to the queue.
     */
    enqueue(data: T): void {
        if (
            (this.front === 0 && this.rear === this.size - 1) ||
            this.rear === (this.front - 1) % (this.size - 1)
        ) {
            throw new Error("Queue is full");
        } else if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
            this.queue[this.rear] = data;
        } else if (this.rear === this.size -1 && this.front != 0) {
            this.rear = 0;
            this.queue[this.rear] = data;
        } else {
            this.rear++;
            this.queue[this.rear] = data;
        }
    }

    /**
     * Removes an element from the queue and returns it.
     */
    dequeue(): T | undefined {
        if (this.front === -1) {
            throw new Error("Queue is empty");
        }
        const data = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else if(this.front = this.size - 1) {
            this.front = 0;
        } else {
            this.front++;
        }
        return data;
    }

    /**
     * Returns the element at the front of the queue.
     */
    peek(): T | null | undefined {
        if (this.front === -1) {
            return null;
        }
        return this.queue[this.front];
    }

    /**
     * Checks if the queue is empty.
     */
    isEmpty(): boolean {
        return this.front === -1;
    }

    /**
     * Returns the number of element in the queue.
     */
    length(): number {
        if (this.front === -1) {
            return 0;
        } 
        if (this.rear >= this.front) {
            return this.rear - this.front + 1;
        }
        return this.size - (this.front - this.rear - 1);
    }

}