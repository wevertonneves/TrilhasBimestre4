
interface LivroBiblioteca {
    titulo: string;
    autor: string;
    disponivel: boolean;
  }
  
 
  class Biblioteca {
   
    livros: LivroBiblioteca[] = [];
  
   
    adicionarLivro(livro: LivroBiblioteca): void {
      this.livros.push(livro);
    }
  
    
    buscarLivrosDisponiveis(): LivroBiblioteca[] {
    
      return this.livros.filter(livro => livro.disponivel);
    }
  }
  

  const minhaBiblioteca = new Biblioteca();
  
 
  minhaBiblioteca.adicionarLivro({ titulo: "teste1", autor: "desconhecido", disponivel: true });
  minhaBiblioteca.adicionarLivro({ titulo: "teste2", autor: "desconhecido", disponivel: false });
  minhaBiblioteca.adicionarLivro({ titulo: "teste3", autor: "desconhecido", disponivel: true });
  
  
  const livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
  console.log("Livros disponíveis:");
  livrosDisponiveis.forEach(livro => {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
  });
  