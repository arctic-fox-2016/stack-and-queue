"use strict"

class Queue {
  constructor(property) {
    this._name = property
    this.room =[]
    this.limit = 10
  }

  set name(value) {this._name = value}
  get name(){return this._name}

  push(x) {
    this.room.push(x)
    console.log(`Execute push : item ${x} has been added to ${this._name} array`);
  }

  fifo() {
    this.room.reverse()
    this.room.pop()
    this.room.reverse()
    console.log(`Execute FIFO  : First item of ${this._name} has been removed from the array`);
  }

  peek() {
    console.log(`Execute peek : There is ${this.room.length} item in ${this._name} array`);
  }

  isEmpty() {
    if (this.room.length ==0){
      console.log(`Execute isEmpty : This ${this._name} array is empty`);
    } else {
      console.log(`Execute isEmpty : This ${this._name} array has ${this.room.length} item inside it`);
    }
  }
  isFull() {
    if (this.room.length >= this.limit){
      console.log(`Execute isFull : Array of ${this._name} is full !`);
    } else {
      console.log(`Execute isFull : Array of ${this._name} still have ${this.limit - this.room.length} space left`);
    }
  }
  show(){
    console.log(`Current item in ${this._name} array : ${this.room}`);
  }
}

var room = new Queue()
room.name = 'vip'
room.push('a')
room.push('b')
room.push('c')
room.push('d')
room.push('e')
room.show()
// room.peek()
room.fifo()
room.show()
// room.peek()
room.isEmpty()
room.isFull()
