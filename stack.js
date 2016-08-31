"use strict"

class Stack {
  constructor() {
    this.temp = []
  }

  push(x) {
    this.temp.push(x)
  }

  pop() {
    this.temp.pop()
  }

  peek() {
    console.log(this.temp)
  }

  isEmpty() {
    if(this.temp.length > 0){
      return false;
    } else {
      return true;
    }
  }
}

let piring = new Stack();
piring.push("piring kotor");
piring.push("piring bersih");
piring.push("piring");
piring.peek()

piring.pop();
piring.peek();

console.log(piring.isEmpty())
