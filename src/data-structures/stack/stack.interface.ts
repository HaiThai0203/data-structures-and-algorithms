export interface IStack<T> {
    push(data: T): void;
    pop(): T;
    isEmpty(): boolean;
    top(): T | null;
    length(): number;
}