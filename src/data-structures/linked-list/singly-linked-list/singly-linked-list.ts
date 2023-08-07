import { ILinkedList } from "../linked-list.interface";
import { SinglyLinkedListNode } from "../linked-list-node";

export class SinglyLinkedList<T> implements ILinkedList<T> {
    private head?: SinglyLinkedListNode<T>;
    private tail?: SinglyLinkedListNode<T>;
    private size: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }
    /**
     * Returns true if the list is empty.
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
        let currentNode: SinglyLinkedListNode<T> = this.head!;
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
    push(data: T): void {
        const newNode: SinglyLinkedListNode<T> = new SinglyLinkedListNode<T>(data);
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
        const node: SinglyLinkedListNode<T> = this.head!;
        this.head = this.head!.next;
        this.size--;
        return node.data;
    }

    /**
     * Inserts the given data as a new node after the current tail.
     */
    append(data: T): void {
        const newNode: SinglyLinkedListNode<T> = new SinglyLinkedListNode<T>(data);
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
        let currentNode: SinglyLinkedListNode<T> = this.head;
        while (currentNode.next !== currentTail) {
            currentNode = currentNode.next!;
        }
        this.tail = currentNode;
        this.size--;
        return currentTail!.data;
    }
    /**
     * Inserts the data as a new node at the given index.
     */
    insertAt(index: number, data: T): void {
        if(index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        if(index === 0) {
            this.push(data);
            return;
        }
        if(index === this.size) {
            this.append(data);
            return;
        }
        const newNode: SinglyLinkedListNode<T> = new SinglyLinkedListNode<T>(data);
        let currentNode: SinglyLinkedListNode<T> | undefined = this.head;
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
        let previousNode: SinglyLinkedListNode<T> | undefined;
        let currentNode: SinglyLinkedListNode<T> | undefined = this.head;
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
        let currentNode: SinglyLinkedListNode<T> | undefined = this.head;
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