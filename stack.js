"use strict"

class Stack {
  constructor(x) {
    if (typeof x == "object") {
       this.myData = x;
    } else {
      this.myData = [];
    };

    this.maxSize = 5;
  }

  push(x) {
    if ( this.isFull() == true ) {
      console.log("Stack is full!");
    } else {
      this.myData.push(x);
    }
  }

  pop() {
    return this.myData.pop()
  }

  peek() {
    return this.myData[this.myData.length-1];
  }

  isEmpty() {
    if (this.myData.length == 0){
      return true
    } else {
      return false
    }
  }

  isFull() {
    if (this.myData.length == this.maxSize) {
      return true
    } else {
      return false
    }
  }
}

let my_stack = new Stack()

console.log(`The stack is empty? ${my_stack.isEmpty()}`)

my_stack.push("Data 1");
my_stack.push("Data 2");
my_stack.push("Data 3");
my_stack.push("Data 4");
my_stack.push("Data 5");
my_stack.push("Data 6");

console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())


console.log(`The stack is empty? ${my_stack.isEmpty()}`)

console.log(my_stack.pop())
