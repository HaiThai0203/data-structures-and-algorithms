import { Stack } from "./stack";

describe('Starting test data structure Stack', () => {
    it('push() should add a new element to the stack', () => {
        const stack = new Stack<String>();
        stack.push('foo');
        expect(stack.length()).toBe(1);
    });

    it('push() should throw error on reach limit', () => {
        const stack = new Stack<String>(1);
        stack.push('foo');
        expect(() => stack.push('bar')).toThrow('Stack Overflow');
    });

    it('pop() should remove the last element and return it', () => {
        const stack = new Stack<String>();
        stack.push('foo');
        stack.push('bar');
        expect(stack.pop()).toBe('bar');
        expect(stack.length()).toBe(1);
    });

    it('pop() should throw an exception if the stack is empty', () => {
        const stack = new Stack<String>();
        expect(() => stack.pop()).toThrow('Stack is empty');
    });

    it('isEmpty() should return true if stack is empty', () => {
        const stack = new Stack<String>();
        expect(stack.isEmpty()).toBeTruthy();
    });

    it('isEmpty() should return false if stack isn\'t empty', () => {
        const stack = new Stack<String>();
        stack.push('foo');
        expect(stack.isEmpty()).toBeFalsy();
    });

    it('top() should return the last value', () => {
        const stack = new Stack<String>();
        stack.push('foo');
        expect(stack.top()).toBe('foo');
    });

    it('top() should return null when the stack is empty', () => {
        const stack = new Stack<String>();
        expect(stack.top()).toBe(null);
    });

    it('length() should return the number of elements in the stack', () => {
        const stack = new Stack<String>();
        stack.push('foo');
        stack.push('bar');
        expect(stack.length()).toBe(2);
    });
})