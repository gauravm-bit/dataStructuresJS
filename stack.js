let Stack = function(){
    this.count = 0;
    this.storage = {};

    //ADD elements to the stack 
    this.push = (value) => {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = () => {
        if(this.count === 0){
            return undefined
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count]
        return result;
    }
}

myStack = new Stack()
myStack.push(1)
myStack.push(2)
console.log(myStack.storage);
myStack.pop()
console.log(myStack.storage);



