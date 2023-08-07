import { DoublyLinkedListNode } from '../linked-list-node';
import { ILinkedList } from '../linked-list.interface';

export class DoublyLinkedList<T> implements ILinkedList<T> {
    private head?: DoublyLinkedListNode<T> | undefined;
    private tail?: DoublyLinkedListNode<T> | undefined;
    private size: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }

    /**
     * Check if the linked list is empty.
     */
    isEmpty(): boolean {
        return this.size === 0;
    }
    /**
     * Returns the element at the specified position in this list.
     */
    get(index: number): T | null {
        if(index < 0 || index >= this.size) {
            return null;
        }
        let currentNode: DoublyLinkedListNode<T> | undefined = this.head;
        for(let i: number = 0; i < index; i++) {
            currentNode = currentNode?.next;
        }
        return currentNode?.data ?? null;
    }
    /**
     * Inserts the given data as the first node of the list.
     */
    push(data: T): void {
        const newNode: DoublyLinkedListNode<T> = new DoublyLinkedListNode<T>(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    /**
     * Removes a node from the head of the list.
     */
    pop(): T | undefined {
        if(!this.head) {
            throw new Error("Index out of bounds");
        }   
        const removedNode = this.head;
        if(this.head === this.tail) {
            this.tail = undefined;
        } else {
            this.head.next!.prev = undefined;
        }
        this.head = this.head.next;
        this.size--;
        return removedNode.data;
    }
    /**
     *  Inserts a node at the tail of the list.
     */
    append(data: T): void {
        const newNode: DoublyLinkedListNode<T> = new DoublyLinkedListNode<T>(data);
        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.size++;
    }
    /**
     * Removes a node from the tail of the list.
     */
    remove(): T | undefined {
        if(!this.head) {
            throw new Error("Index out of bounds");
        }
        const removedNode = this.tail;
        if (this.head === this.tail) {
            this.head = undefined;
        } else {
            this.tail!.prev!.next = undefined;
        }
        this.tail = this.tail!.prev;
        this.size--;
        return removedNode!.data;
    }
    /**
     * Inserts a node at a specific index.
     */
    insertAt(index: number, data: T): void {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) {
            this.push(data);
            return;
        }
        if (index === this.size) {
            this.append(data);
            return;
        }
        const newNode = new DoublyLinkedListNode(data);
        let prevNode: DoublyLinkedListNode<T> | undefined = this.head;
        for (let i: number = 0; i < index - 1; i++) {
            prevNode = prevNode?.next;
        }
        const nextNode = prevNode?.next;
        prevNode!.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode!.prev = newNode;
        this.size++;
    }
    /**
     * Removes a node at a specific index.
     */
    removeAt(index: number): T | undefined {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) {
            return this.pop();
        }
        if (index === this.size - 1) {
            return this.remove();
        }
        let removedNode: DoublyLinkedListNode<T> | undefined = this.head;
        for (let i: number = 0; i < index; i++) {
            removedNode = removedNode?.next;
        }
        removedNode!.prev!.next = removedNode!.next;
        removedNode!.next!.prev = removedNode!.prev;
        this.size--;
        return removedNode!.data;
    }
    /**
     * Clears the list.
     */
    clear(): void {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }
    /**
     * Converts the list to an array.
     */
    toArray(): T[] {
        const array: T[] = [];
        let currentNode: DoublyLinkedListNode<T> | undefined = this.head;
        while (currentNode) {
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return array;
    }
    /**
     * Gets the length of the list.
     */
    length(): number {
        return this.size;
    }

    /**
     * Reverses the list.
     */
    reverse(): DoublyLinkedList<T> | null {
        if (!this.head) {
            return null;
        }
        let currentNode: DoublyLinkedListNode<T> | undefined = this.head;
        let nextNode: DoublyLinkedListNode<T> | undefined = undefined;
        let prevNode: DoublyLinkedListNode<T> | undefined = undefined;
        while (currentNode) {
            nextNode = currentNode.next;
            prevNode = currentNode.prev;

            currentNode.next = prevNode;
            currentNode.prev = nextNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
        return this;
    }
}