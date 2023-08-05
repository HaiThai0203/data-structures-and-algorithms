import { ILinkedList } from "./linked-list.interface";

/**
 * Represents a node in a linked list.
 * @data The data stored in the node.
 * @next A reference to the next node in the list. Can reference to null, if there is no next element.
 */
class ListNode<T> {
    constructor(public data: T, public next?: ListNode<T>) {}
}

/**
 * This is an implementation of a (singly) linked list.
 * A linked list is a data structure that stores each element with a pointer (or reference) to the next element
 * in the list. Therefore, it is a linear data structure, which can be resized dynamically during runtime, as there is
 * no fixed memory block allocated.
 */

export class SinglyLinkedList<T> implements ILinkedList<T> {
    private head?: ListNode<T>;
    private tail?: ListNode<T>;
    private size: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }
    /**
     * Returns true if the list is empty..
     */
    isEmpty(): boolean {
        return this.size === 0;
    }
    /**
     * Returns the element at the specified position in this list.
     */
    get(index: number): T | null | undefined {
        if(index < 0 || index >= this.size) {
            return null;
        }
        if(this.isEmpty()) {
            return null;
        }
        let currentNode: ListNode<T> = this.head!;
        for(let i: number = 0; i < index; i++) {
            if(!currentNode.next) {
                return null;
            }
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }
    /**
     * Inserts the given data as the first node of the list.
     */
    push(value: T): void {
        const newNode: ListNode<T> = new ListNode<T>(value);
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    /**
     * Removes the first node of the list
     */
    pop(): T | undefined {
        if(this.isEmpty()) {
            throw new Error("Index out of bounds");
        }
        const node: ListNode<T> = this.head!;
        this.head = this.head!.next;
        this.size--;

        return node.data;
    }

    /**
     * Inserts the given data as a new node after the current tail.
     */
    append(data: T): void {
        const newNode: ListNode<T> = new ListNode<T>(data);
        if(this.isEmpty()) {
            this.head = newNode;
        }else {
            this.tail!.next = newNode;
        }

        this.tail = newNode;
        this.size++;
    }
     /**
     * Removes the current tail of the list.
     */
    remove(): T  {
        if(!this.head) {
            throw new Error("Index out of bounds")
        }
        const currentTail = this.tail;
        // There is only one node in linked list.
        if(this.head === this.tail) {
            this.head = undefined;
            this.tail = undefined;
            this.size--;
            return currentTail!.data;
        }
        // There are many nodes in linked list.
        let currentNode: ListNode<T> = this.head;
        while (currentNode.next !== currentTail) {
            currentNode = currentNode.next!;
        }
        this.tail = currentNode;
        this.size--;
        return currentTail!.data;
    }
    /**
     * Inserts the data as a new node at the given index.x
     */
    insertAt(index: number, value: T): void {
        if(index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        if(index === 0) {
            this.push(value);
            return;
        }
        if(index === this.size) {
            this.append(value);
            return;
        }
        const newNode: ListNode<T> = new ListNode<T>(value);
        let currentNode: ListNode<T> | undefined = this.head;
        for(let i: number = 0; i < index - 1; i++) {
            currentNode = currentNode?.next;
        }
        const nextNode = currentNode?.next;
        currentNode!.next = newNode;
        newNode.next = nextNode;
        this.size++;
    }
    /**
     * Removes the node at the given index.
     */
    removeAt(index: number): T | undefined {
        if(index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        if(index === 0) {
            return this.pop();
        }
        if(index === this.size - 1) {
            return this.remove();
        }
        let previousNode: ListNode<T> | undefined;
        let currentNode: ListNode<T> | undefined = this.head;
        for(let i: number = 0; i < index; i++) {
            if(i === index - 1) {
                previousNode = currentNode;
            }
            currentNode = currentNode?.next;
        }
        previousNode!.next = currentNode?.next;
        this.size--;
        return currentNode!.data;
    }
    /**
     * Clear the list
     */
    clear(): void {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }
    /**
     * Converts the list to an array
     */
    toArray(): (T | undefined)[] {
        const array: T[] = [];
        let currentNode: ListNode<T> | undefined = this.head;
        while(currentNode) {
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return array;
    }
    /**
     * Return length of the list
     */
    length(): number {
        return this.size;
    }
}