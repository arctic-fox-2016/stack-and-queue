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
      return "tidak kosong";
    } else {
      return "kosong";
    }
  }

  size(){
    return this.temp.length
  }
}

class Queue {
  constructor() {
    this.temp = []
  }

  push(x) {
    this.temp.push(x)
  }

  pop() {
    this.temp.shift()
  }

  peek() {
    console.log(this.temp)
  }

  isEmpty() {
    if(this.temp.length > 0){
      return "tidak kosong";
    } else {
      return "kosong";
    }
  }

  size(){
    return this.temp.length
  }
}


let piring = new Stack();
piring.push("piring satu");
piring.push("piring dua");
piring.push("piring tiga");
piring.push("piring empat");
piring.push("piring lima");
piring.peek()
piring.pop();
piring.peek();

console.log(piring.isEmpty())

let antri = new Queue();
antri.push("masuk pertama");
antri.push("masuk kedua");
antri.push("masuk ketiga");
antri.peek()

antri.pop();
antri.peek();

console.log(antri.isEmpty())
