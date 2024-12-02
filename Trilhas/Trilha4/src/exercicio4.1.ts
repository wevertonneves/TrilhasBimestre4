
interface Produto {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    calcularValor(): number; 
  }
  

  class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
  
   
    constructor(id: number, nome: string, preco: number, quantidade: number) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    
    calcularValor(): number {
      return this.preco * this.quantidade;
    }
  
  
    exibirDetalhes(): void {
      console.log(`ID: ${this.id}`);
      console.log(`Nome: ${this.nome}`);
      console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
      console.log(`Quantidade: ${this.quantidade}`);
      console.log(`Valor total em estoque: R$ ${this.calcularValor().toFixed(2)}`);
    }
  }
  
  // Exemplo de uso:
  const item1 = new ItemLoja(1, "fio 8mm", 9.99, 10);
  item1.exibirDetalhes(); 
  
  const item2 = new ItemLoja(2, "alicate universal", 99.90, 5);
  item2.exibirDetalhes(); 
  