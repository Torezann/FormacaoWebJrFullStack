class Fila {
    constructor() {
      this.itens = [];
    }
  
    enfileirar(item) {
      this.itens.push(item);
    }
  
    desenfileirar() {
      return this.itens.shift();
    }
  
    frente() {
      return this.itens[0];
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  }
  
  const fila = new Fila();
  fila.enfileirar("A");
  fila.enfileirar("B");
  fila.enfileirar("C");
  fila.enfileirar("D");
  fila.enfileirar("E");
  fila.enfileirar("F");
  fila.enfileirar("G");
  fila.enfileirar("H");
  fila.enfileirar("I");
  fila.enfileirar("J");
  fila.enfileirar("K");
  console.log(fila.desenfileirar());
  console.log(fila.desenfileirar());
  console.log(fila.desenfileirar());
  console.log(fila.desenfileirar());
  console.log(fila.desenfileirar());
  console.log(fila.desenfileirar());
  