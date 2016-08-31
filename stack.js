"use strict"

class Stack {
  constructor(x) {
    this.x = [];


  }

  push(a) {
    if (this.x.length <= 10) {
      this.x.push(a);
      return this.x;

    }
  }

  pop() {
    this.x.pop();
    return this.x;
  }

  peek() {

  }

  isEmpty() {
  }

  isFull(){

    if (this.x.length <= 10){
      console.log("penuh brow");
    }

  }
}


let myStack = new Stack()

myStack.push ("Javascript");
myStack.push ("Is Just So");
myStack.push ("cools");
myStack.push ("cools");
myStack.push ("cools");
myStack.push ("cools");
myStack.push ("cools");
myStack.push ("cools");
myStack.push ("cools");
myStack.push ("cools");
myStack.push (25);
myStack.push ("cools");
myStack.push ("cools");
myStack.push ("cools");
myStack.push ("cools2");
myStack.push (25);
myStack.pop();
myStack.isFull();


console.log(myStack);
