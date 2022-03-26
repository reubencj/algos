class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  // constructor, other methods, removed for brevity
  constructor() {
    this.head = null;
  }

  addFront(value) {
    let new_node = new Node(value);

    if (!this.head) {
      this.head = new_node;
      return this;
    }

    new_node.next = this.head;

    this.head = new_node;
    return this;
  }

  removehead() {
    if (!this.head) {
      console.log("No head");
      return this;
    }
    this.head = this.head.next;

    return this;
  }

  front() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }
  //contains

  contians(value) {
    let result = false;

    let runner = this.head;

    while (runner !== null) {
      if (runner.data == value) {
        result = true;
        return result;
      }
      runner = runner.next;
    }

    return result;
  }

  //length

  length() {
    let runner = this.head;
    let counter = 0;
    while (runner !== null) {
      counter++;
      runner = runner.next;
    }

    return counter;
  }

  //display
  display() {
    let display_text = "";
    let runner = this.head;
    let counter = 0;
    while (runner != null) {
      counter++;
      display_text += `Node ${counter}: ${runner.data}\n`;
      runner = runner.next;
    }
    return display_text;
  }

  max() {
    if (this.head == null) {
      return null;
    }
    let runner = this.head;
    let max_val = this.head.data;
    while (runner.next != null) {
      runner = runner.next;
      if (max_val < runner.data) {
        max_val = runner.data;
      }
    }
    return max_val;
  }

  min() {
    if (this.head == null) {
      return null;
    }
    let runner = this.head;
    let min_val = this.head.data;
    while (runner.next != null) {
      runner = runner.next;
      if (min_val < runner.data) {
        min_val = runner.data;
      }
    }
    min_val;
    return min_val;
  }

  avg() {
    let runner = this.head;
    let sum = 0;
    let num = 0;
    while (runner != null) {
      sum += runner.data;
      runner = runner.next;
      num++;
    }

    return sum / num;
  }
}

// let ls = new SLL().addFront("Hello");
// ls.addFront("I'm in the front now");
// ls.addFront("No I am");

// console.log(ls);
// console.log(ls.display());

let ls = new SLL().addFront(3).addFront(3).addFront(3);

console.log(ls.avg());
