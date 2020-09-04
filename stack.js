let Stack = function(){
    this.count = 0;
    this.storage = {};

    //ADD elements to the stack 
    this.push = (value) => {
        this.storage[this.count] = value;
        this.count++;
    }
}

myStack = new Stack()
myStack.push(1)
myStack.push(2)
console.log(myStack.storage);


