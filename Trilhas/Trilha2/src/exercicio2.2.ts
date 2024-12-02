class Livro {
 
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;
  
   
    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
      this.lido = lido;
    }
  
    
    marcarComoLido(): void {
      if (!this.lido) {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
      } else {
        console.log(`O livro "${this.titulo}" já estava marcado como lido.`);
      }
    }
  
   
    exibirStatus(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Páginas: ${this.paginas}`);
      console.log(`Lido: ${this.lido ? "Sim" : "Não"}`);
    }
  }
  

  
  const meuLivro = new Livro("A volta dos que nao forao", "desconecido", 256);
  meuLivro.exibirStatus(); 
  
  meuLivro.marcarComoLido();
  meuLivro.exibirStatus(); 