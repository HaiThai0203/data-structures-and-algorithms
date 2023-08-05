export interface IStack<T> {
    push(value: T): void;
    pop(): void;
    isEmpty(): void;
    top(): T | null;
    length(): number;
}