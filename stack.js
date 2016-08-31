"use strict"

class Stack {
  constructor() {
      this.tampung = []
      this.max = 10
  }

  push(x) {
    if (this.tampung.length <= 10){
      this.tampung.push(x);
      return this.tampung;
    }
  }

  pop() {
    this.tampung.pop();
    return this.tampung;
  }

  peek() {
    this.tampung.peek();
    return this.tampung;

  }

  isEmpty() {
  if(this.max.length == 0){
    return true;
  }
  else
  {
    return false;
  }
  }

  isFull()
  {
    if(this.tampung.length <= 10)
    {
      console.log("penuh");
    }
  }
}

let my_stack = new Stack()

//console.log(`The stack is empty? ${stack.isEmpty()}`)

my_stack.push("Javascript")
my_stack.push("is just so")
my_stack.push(15)

my_stack.push("Javascript")
my_stack.push("is just so")
my_stack.push(15)


my_stack.push("Javascript")
my_stack.push("is just so")
my_stack.push(15)


my_stack.push("Javascript")
my_stack.push("is just so")
my_stack.push(15)


my_stack.push("Javascript")
my_stack.push("is just so")
my_stack.push(15)

my_stack.pop()

console.log(my_stack)
