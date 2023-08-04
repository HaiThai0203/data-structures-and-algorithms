/* Stack is based on the LIFO method (Last-IN-First-OUT).
 * It means that elements added to the stack are placed on the top and only the
 * last element (from the top) can be reached. After we get access to the last
 * element, it pops from the stack.
 * This is a class-based implementation of a Stack.
 */

export class Stack<T> {
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
     * @function push
     * @description - add a new element to the stack
     * @param {T} value - the new value to add
     */
    push(value: T) {
        if (this.length() + 1 > this.limit) {
            throw new Error('Stack Overflow');
        }
        this.stack.push(value);
    }

    /**
     * @function pop
     * @description - remove an elmement from the top of the stack
     * @throws will throw an error if the stack is empty
     * @return {T} removed element
     */
    pop(): T {
        if(this.length() === 0 ) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop() as T;
    }
    /**
     * @function isEmpty
     * @description - check if the stack is empty
     * @return {boolean} returns true if the stack is empty, otherwise false
     */
    isEmpty(): boolean {
        return this.length() === 0;
    }
    /**
     * @function top
     * @description - return the last element in the stack without removing it
     * @return {T | null} return the last element or null if the stack is empty
     */
    top(): T | null {
        if(this.length() === 0) {
            return null;
        }
        return this.stack[this.length() - 1];
    }
    /**
     * @function length
     * @description - number of length in the stack
     * @returns {number} the number of elements in the stack 
     */
    length(): number {
        return this.stack.length;
    }
};