export class SinglyLinkedListNode<T> {
    constructor(public data: T, public next?: SinglyLinkedListNode<T>) {}
}

export class DoublyLinkedListNode<T> {
    constructor(
        public data: T,
        public next?: DoublyLinkedListNode<T>,
        public prev?: DoublyLinkedListNode<T>
    ) {}
}