
interface ProdutoLoja {
    codigo: number;
    nome: string;
  }
  

  class Loja {
  
    produtos: ProdutoLoja[] = [];
  
    adicionarProduto(produto: ProdutoLoja): void {
      this.produtos.push(produto);
    }
  
   
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
      return this.produtos.find(produto => produto.codigo === codigo);
    }
  }
  
 
  const minhaLoja = new Loja();
  
  
  minhaLoja.adicionarProduto({ codigo: 1, nome: "farol dianteiro fusca" });
  minhaLoja.adicionarProduto({ codigo: 2, nome: "roda liga leve 18" });
  minhaLoja.adicionarProduto({ codigo: 3, nome: "bateria" });
  
 
  const produtoEncontrado = minhaLoja.buscarProdutoPorCodigo(2);
  if (produtoEncontrado) {
    console.log(`Produto encontrado: Código: ${produtoEncontrado.codigo}, Nome: ${produtoEncontrado.nome}`);
  } else {
    console.log("Produto não encontrado.");
  }
  

  const produtoInexistente = minhaLoja.buscarProdutoPorCodigo(5);
  if (produtoInexistente) {
    console.log(`Produto encontrado: Código: ${produtoInexistente.codigo}, Nome: ${produtoInexistente.nome}`);
  } else {
    console.log("Produto não encontrado.");
  }
  