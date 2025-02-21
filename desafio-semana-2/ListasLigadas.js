class No {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  class ListaLigada {
    constructor() {
      this.cabeca = null;
    }
  
    adicionar(valor) {
      const novoNo = new No(valor);
      if (!this.cabeca) {
        this.cabeca = novoNo;
      } else {
        let atual = this.cabeca;
        while (atual.proximo) {
          atual = atual.proximo;
        }
        atual.proximo = novoNo;
      }
    }
  
    imprimir() {
      let atual = this.cabeca;
      while (atual) {
        console.log(atual.valor);
        atual = atual.proximo;
      }
    }
  }
  
  const lista = new ListaLigada();
  lista.adicionar(1);
  lista.adicionar(2);
  lista.adicionar(3);
  lista.imprimir();
  