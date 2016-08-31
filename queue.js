"use strict"

class Queue {
  constructor() {
    this.temp = [];
    this.MAX_SIZE = 10;
  }

  push(x) {
    if (this.temp.length < this.MAX_SIZE) {
      return this.temp.push(x);
    }
  }

  shift() {
    return this.temp.shift();
  }

  peek() {
    return this.temp[this.temp.length-1];
  }

  isEmpty() {
    if (this.temp.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.temp.length;
  }

  each() {
    for (var i = 0; i < this.temp.length; i++) {
      console.log(this.temp[i]);
    }
  }

  first() {
    return this.temp[0];
  }

  last() {
    return this.temp[this.temp.length-1];
  }

  isFull() {
    if (this.temp.length == this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
}

// Buat queue baru
let my_queue = new Queue();

// Cek apakah queue sudah ada isi atau kosong
console.log(`The queue is empty? ${my_queue.isEmpty()}`);

// Tambahkan tiga
my_queue.push("Javascript");
my_queue.push("is just so");
my_queue.push("cool");

// Karena queue menggunakan array,
// Kita bisa add tipe data apapun seperti string dan integer
my_queue.push(15);

// Lihat, kita menghapus data satu per satu
console.log(my_queue.shift());
console.log(my_queue.shift());
console.log(my_queue.shift());
console.log(my_queue.shift());

// Cek lagi apakah queue-nya beneran kosong?
console.log(`The queue is empty? ${my_queue.isEmpty()}`);

// Coba hapus queue kosong, apakah yang terjadi?
console.log(my_queue.shift());

// Test lain
my_queue.push("1");
my_queue.push("2");
my_queue.push("3");
my_queue.push("4");
my_queue.push("5");
my_queue.push("6");
my_queue.push("7");
my_queue.push("8");
my_queue.push("9");
my_queue.push("10");
my_queue.push("11");
my_queue.push("12");
console.log(my_queue.size());
my_queue.each();
console.log(my_queue.first());
console.log(my_queue.last());
console.log(`The queue is full? ${my_queue.isFull()}`);
