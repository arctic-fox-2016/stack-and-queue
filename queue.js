"use strict"

class Queue {
  constructor() {
    this._value = [];
    this._max = 5;
  }

  peek() {

  }

  isEmpty() {
    if(this._value.length == 0) return true;
    return false;
  }

  isFull() {
    if(this._value.length == this._max) return true;
    return false;
  }

  push(x) {
    if(!this.isFull()){
      this._value[this._value.length] = x;
    }
    return "Already full";
  }

  pop() {
    if(!this.isEmpty()){
      let temp_value = [];
      let pop_value = null;
      for(let idx = 0; idx < this._value.length-1; idx++){
        temp_value[idx] = this._value[idx + 1];
      }
      pop_value = this._value[0];
      this._value = temp_value;
      return `Pop Value ${pop_value}`;
    }
    return "Already empty";
  }
}

let my_queue = new Queue();

console.log(`The Stack is empty? ${my_queue.isEmpty()}`)

my_queue.push("Javascript")
my_queue.push("is just so")
my_queue.push("cool")

my_queue.push(15)

console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());

console.log(`The Stack is empty? ${my_queue.isEmpty()}`)

console.log(my_queue.pop());
