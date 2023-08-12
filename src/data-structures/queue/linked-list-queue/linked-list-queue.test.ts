import { testQueue } from '../queue.test'
import { LinkedListQueue } from './linked-list-queue';

describe("Linked Queue", () => testQueue(LinkedListQueue));
