function LinkedList() {
    let length = 0;
    let head = null;

    let Node  = function(element){
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
        if(head === null){
            head = node;
        }
        else{
            let currentNode = head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++
    }
}
myList = new LinkedList();
myList.add(12)
myList.add(13)
console.log(myList.size());
