class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    append(value) {
        // adds a new node containing value to the end of the list
        let newNode = new Node(value);
        let currentNode;

        if (this.head === null) {
            this.head = newNode;
        } else {
            currentNode = this.head;

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode
            }

            currentNode.nextNode = newNode;
        }

        this.size++
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
        this.head = new Node(value, this.head)
        this.size++
    }

    listSize() {
        // Returns the total number of nodes in the list
        return this.size
    }

    listHead() {
        // Returns the first node in the list
        return this.head
    }

    listTail() {
        // Returns the last node in the list
        if (!this.head) {
            return null
        }

        let currentNode = this.head

        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode
        }

        return currentNode
    }

    at(index) {
        // returns the node at the given index
        let counter = 0;
        let currentNode = this.head;

        while (currentNode && counter < index) {
            currentNode = currentNode.nextNode;
            counter++
        }

        return currentNode
    }

    pop() {
        // Removes the last element from the list
    }

    contains(value) {
        // returns true if the passed in value is in the list and otherwise returns false.
    }

    find(value) {
        // returns the index of the node containing value, or null if not found.
    }

    toString() {
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.value)
            currentNode = currentNode.nextNode;
        }
    }
}

class Node {
    constructor(value, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

const ll = new LinkedList()

ll.prepend(100);
ll.prepend(200);
ll.prepend(300);
ll.append(400);

ll.toString()

console.log(ll.listHead())