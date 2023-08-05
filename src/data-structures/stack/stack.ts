/* Stack is based on the LIFO method (Last-IN-First-OUT).
 * It means that elements added to the stack are placed on the top and only the
 * last element (from the top) can be reached. After we get access to the last
 * element, it pops from the stack.
 * This is a class-based implementation of a Stack.
 */

import { IStack } from "./stack.interface";

export class Stack<T> implements IStack<T> {
    private stack: T[] = [];
    private limit: number;

    /**
     * constructor of the stack, can set a limit, if not provided there is no limit to the stack.
     * @param {number} [limit=Number.MAX_VALUE] the limit of stack
     */
    constructor(limit: number = Number.MAX_VALUE) {
        this.limit = limit;
    }

    /**
     * Add a new element to the stack.
     */
    push(value: T) {
        if (this.length() + 1 > this.limit) {
            throw new Error('Stack Overflow');
        }
        this.stack.push(value);
    }

    /**
     * Remove an elmement from the top of the stack.
     */
    pop(): T {
        if(this.length() === 0 ) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop() as T;
    }
    /**
     * Check if the stack is empty.
     */
    isEmpty(): boolean {
        return this.length() === 0;
    }
    /**
     * Return the last element in the stack without removing it.
     */
    top(): T | null {
        if(this.length() === 0) {
            return null;
        }
        return this.stack[this.length() - 1];
    }
    /**
     * Return number of length in the stack.
     */
    length(): number {
        return this.stack.length;
    }
};