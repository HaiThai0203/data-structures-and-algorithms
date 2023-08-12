# What is Queue?

A Queue is a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.

Define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list 
are made at the other end. 

# FIFO Principle of Queue
- A Queue is like a line waiting to purchase tickets, where the first person in line is the first person served.
- Position of the entry in a queue ready to be served, that is, the first entry that will be removed from the queue,
is called the front of the queue(sometimes, head of the queue), similarly, the position of the last entry in the queue,
that is, the one most recently added, is called the rear (or the tail) of the queue. See the below figure.

# Characteristics of Queue
- Queue can handle multiple data.
- We can access both ends.
- They are fast and flexible.

# Types of Queue
- **Input Restricted Queue**: This is a simple queue. In this type of queue, the input can be taken from only one end
but deletion can be done from any of the ends.
- **Output Restricted Queue**: This is also a simple queue. In this type of queue, the input can be taken from both ends but
deletion can be done from only one end.
- **Circular Queue**: This is a special type of queue where the last position is connected back to the first position.
- **Double-Ended Queue (Dequeue)**: In a double-ended queue the insertion and deletion operations, both can be performed from both ends.
- **Priority Queue**: A priority queue is a special queue where the elements are accessed based on the priority assigned to them.

# Basic Operations for Queue in Data Structure
Some of the basic operations for Queue in Data Structure are:
- Enqueue() – Adds (or stores) an element to the end of the queue.
- Dequeue() – Removal of elements from the queue.
- Peek() - Acquires the data element available at the front node of the queue without deleting it.
- Rear() – This operation returns the element at the rear end without removing it.
- isEmpty() – Checks if the queue is empty.

## Enqueue()
Enqueue() operation in Queue adds (or stores) an element to the end of the queue.

- Step 1: Check if the queue is full.
- Step 2: If the queue is full, return overflow error and exit.
- Step 3: If the queue is not full, increment the rear pointer to point to the next empty space.
- Step 4: Add the data element to the queue location, where the rear is pointing.
- Step 5: return success.

![Enqueue representation](../../../assets/queue/enqueue_representation.PNG)


