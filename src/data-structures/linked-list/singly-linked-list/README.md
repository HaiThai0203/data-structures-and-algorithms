# Singly Linked List

## What is a singly linked list?

A singly linked list is a data structure that consists of a head, tail, and length property. The head and tail are assigned a node object. The singly-linked list can only be traverse in one direction. Starting at the head and ending at the tail.

![Singly Linked List](../../../assets/linked-list//singly-linked-list.PNG)

## How to build singly linked list?

To get started building a singly linked list we first need to create 2 classes and 1 interface. The first class will create node objects which contain a value and a next property. The second class is the Singly linked list which contains a head, tail, and size(length), an interface contains the method of linked lists. When we first instantiate a singly linked list a new node is created and is set to the head and tail properties of the linked list.

```
class SinglyLinkedListNode<T> {
    constructor(public data: T, public next?: SinglyLinkedListNode<T>) {}
}
```

```
interface ILinkedList<T> {
    isEmpty(): boolean;
    get(index: number): T | null | undefined;
    push(data: T): void;
    pop(): T | undefined;
    append(data: T): void;
    remove(): T | undefined;
    insertAt(index: number, data: T): void;
    removeAt(index: number): T | undefined;
    clear(): void;
    toArray(): (T | undefined)[];
    length(): number;
}
```

```
class SinglyLinkedList<T> implements ILinkedList<T> {
    private head?: SinglyLinkedListNode<T>;
    private tail?: SinglyLinkedListNode<T>;
    private size: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }
}
```

### push 
Inserts the given data as the first node of the list.

#### Pseudocode 
```
Push(data)
  // Initialize new node with data list
  n ← node(data)
  if head = ø
    head ← n
    tail ← n
  else
    n.next ← head
    head ← n
  end if
  size++
end Push
```

#### Code
```
push(data: T): void {
    const newNode: SinglyLinkedListNode<T> = new SinglyLinkedListNode<T>(data);
    if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.size++;
}
```
