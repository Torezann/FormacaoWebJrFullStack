class Pilha {
    constructor() {
      this.itens = [];
    }
  
    empilhar(item) {
      this.itens.push(item);
    }
  
    desempilhar() {
      return this.itens.pop();
    }
  
    topo() {
      return this.itens[this.itens.length - 1];
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  }
  
  const pilha = new Pilha();
  pilha.empilhar(10);
  pilha.empilhar(20);
  pilha.empilhar(30);
  pilha.empilhar(40);
  pilha.empilhar(50);
  pilha.empilhar(60);
  pilha.empilhar(70);
  pilha.empilhar(80);
  pilha.empilhar(90);
  pilha.empilhar(100);
  console.log(pilha.desempilhar());
  console.log(pilha.desempilhar());
  console.log(pilha.desempilhar());
  console.log(pilha.desempilhar());
  console.log(pilha.desempilhar());
  console.log(pilha.desempilhar());
  