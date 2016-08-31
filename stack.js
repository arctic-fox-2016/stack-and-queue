"use strict"
console.log("===========CONTOH STACK - release 1===========")
const MAX_SIZE = 2
class Stack {
  constructor(kalimat) {
      this.kalimat  = new Array()
      this.totalData = 0
  }

  push(x) {
    if(this.totalData<MAX_SIZE)
    {
      console.log(`INSERT DATA : ${x}`)
      this.kalimat.push(x)
      this.totalData++
    }
    else {
      console.log("-----Data sudah melewati batas maksimum----")
    }
  }

  pop() {
    if(this.totalData>0){
      this.totalData--
      return `DELETE DATA : ${this.kalimat.pop()}`;
    }
    else return '----Sudah Tidak Ada Data yang Di Pop Lagi----'
    //return 'indeks terakhir sudah dihapus'
  }

  peek() {

  }

  isEmpty() {
    return(this.kalimat.length==0)
  }

  isFull(){
    return this.totalData
  }
}


let my_stack = new Stack()
console.log(`The stack is empty? ${my_stack.isEmpty()}`)
my_stack.push("javascript")
my_stack.push("is just so")
my_stack.push("cool")
my_stack.push(15)
//console.log(my_stack[3])
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(`The stack is empty? ${my_stack.isEmpty()}`)











/////////////
//release 2

console.log("===========CONTOH QUEUE - release 2===========")
class Queue {
  constructor(kalimat) {
      this.kalimat  = new Array()
      this.totalData = 0
  }

  push(x) {
    if(this.totalData<MAX_SIZE)
    {
      console.log(`INSERT DATA : ${x}`)
      this.kalimat.push(x)
      this.totalData++
    }
    else {
      console.log("-----Data sudah melewati batas maksimum----")
    }
  }

  pop() {
    if(this.totalData>0){
      this.totalData--
      return `DELETE DATA : ${this.kalimat.shift()}`;
    }
    else return '----Sudah Tidak Ada Data yang Di Pop Lagi----'
    //return 'indeks terakhir sudah dihapus'
  }

  peek() {

  }

  isEmpty() {
    return(this.kalimat.length==0)
  }

  isFull(){
    return this.totalData
  }
}

let my_queue = new Queue()
console.log(`The queue is empty? ${my_queue.isEmpty()}`)
my_queue.push("javascript")
my_queue.push("is just so")
my_queue.push("cool")
my_queue.push(15)
//console.log(my_stack[3])
console.log(my_queue.pop())
console.log(my_queue.pop())
console.log(my_queue.pop())
console.log(my_queue.pop())
