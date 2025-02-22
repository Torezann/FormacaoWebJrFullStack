class Main {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ListaLigada {
  constructor() {
    this.head = null;
  }

  adicionar(value) {
    const newMain = new Main(value);
    if (!this.head) {
      this.head = newMain;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newMain;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }

  remove(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }
}

const list = new ListaLigada();
list.adicionar(10);
list.adicionar(20);
list.adicionar(30);
list.print();

list.remove(20);
list.print();
