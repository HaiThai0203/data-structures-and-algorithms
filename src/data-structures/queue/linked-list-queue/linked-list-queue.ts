import { SinglyLinkedListNode as Node } from "../../linked-list/linked-list-node";
import { IQueue } from "../queue.interface";

export class LinkedListQueue<T> implements IQueue<T> {
    private size: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.size = 0;
    }

    /**
     * Adds an element to the queue.
     */
    enqueue(data: T): void {
        const newNode = new Node<T>(data);        
        this.size++;
        if (!this.tail) {
            this.tail = this.head = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * Removes an element from the queue and returns it.
     */
    dequeue(): T | undefined {
        if (!this.head) {
            throw new Error("Queue Underflow");
        }
        let nodeHead = this.head;
        this.head = this.head.next;
        this.size--;
        return nodeHead.data;
    }

    /**
     * Returns the element at the front of the queue.
     */
    peek(): T | null | undefined {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }

    /**
     * Checks if the queue is empty.
     */
    isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * Returns the number of element in the queue.
     */
    length(): number {
        return this.size;
    }
}