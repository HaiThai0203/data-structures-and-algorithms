import { DoublyLinkedList } from "../doubly-linked-list/doubly-linked-list";
import { testLinkedList } from "./linked-list";

describe("Doubly linked list", () => {
    testLinkedList(DoublyLinkedList)
    it("should reverse the list", () => {
        const list: DoublyLinkedList<number> = new DoublyLinkedList<number>();

        list.append(1);
        list.append(2);
        list.append(3);
        list.reverse();

        expect(list.get(0)).toBe(3);
        expect(list.get(1)).toBe(2);
    });

    it("should return null for reverse when list is empty", () => {
        const list: DoublyLinkedList<number> = new DoublyLinkedList<number>();

        expect(list.reverse()).toBeNull();
    });
});