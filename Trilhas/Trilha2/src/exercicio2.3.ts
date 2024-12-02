class Produto {

    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
   
    calcularValorTotal(): number {
      return this.preco * this.quantidade;
    }
  
   
    exibirDetalhes(): void {
      console.log(`Produto: ${this.nome}`);
      console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
      console.log(`Quantidade: ${this.quantidade}`);
      console.log(`Valor total em estoque: R$ ${this.calcularValorTotal().toFixed(2)}`);
    }
  }
  

  
  const produto1 = new Produto("bermuda", 89.99, 169);
  produto1.exibirDetalhes(); 
  
  const produto2 = new Produto("chinelo", 21.90, 500);
  produto2.exibirDetalhes(); 
  