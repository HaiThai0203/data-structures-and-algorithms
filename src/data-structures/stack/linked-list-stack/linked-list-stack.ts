import { SinglyLinkedList } from "../../linked-list/singly-linked-list/singly-linked-list";
import { IStack } from "../stack.interface";

export class LinkedListStack<T> implements IStack<T> {
    private list: SinglyLinkedList<T>;
    private limit: number;

    constructor(limit: number = Number.MAX_VALUE) {
        this.list = new SinglyLinkedList<T>();
        this.limit = limit;
    }

    /**
     * Inserts a new element on the top of the stack.
     */
    push(data: T): void {
        if (this.length() + 1 > this.limit) {
            throw new Error('Stack overflow');
        }
        this.list.push(data)
    };

    /**
     * Removes the top element from the stack.
     */
    pop(): T {
        if (this.isEmpty()) {
            throw new Error("Stack underflow");
        }        
        return this.list.pop();
    };

    /**
     * Gets whether the stack is empty or not.
     */
    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    /**
     * Gets the top element of the stack.
     */
    top(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.list.get(0)!;
    }

    /**
     * Gets the amount of elements in the stack.
     */
    length(): number {
        return this.list.length();
    }
;


}