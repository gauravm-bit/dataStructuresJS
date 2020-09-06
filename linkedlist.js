function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.size = () => {
        return length;
    }

    this.head = () => {
        return head;
    }

    this.add = (element) => {
        let node = new Node(element);
        if (head === null) {
            head = node;
        }
        else {
            let currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++
    }

    this.remove = (element) => {
        let currentNode = head;
        let previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        }
        else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }

    this.indexOf = (element) => {
        let currentNode = head;
        let index = -1;
        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
}
myList = new LinkedList();
myList.add(12)
myList.add(13)
myList.add(13)
myList.add(13)
myList.add(13)
myList.add(18)
myList.add(13)
myList.add(13)

console.log(myList.size());
myList.remove(13)
console.log(myList.size());

console.log(myList.indexOf(18));