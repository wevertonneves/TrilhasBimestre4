
interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
  }
  

  class BibliotecaGestao {
    private livros: LivroBiblioteca[] = [];
  
    
    adicionarLivro(livro: LivroBiblioteca): void {
      this.livros.push(livro);
    }
  
   
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }
  
 
    buscarPorAutor(autor: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }
  
   
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
      return this.livros
        .filter(livro => livro.disponivel)
        .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
  }
  

  const biblioteca = new BibliotecaGestao();
  

  biblioteca.adicionarLivro({
    titulo: "teste1",
    autor: "autor1",
    genero: "Romance",
    disponivel: true
  });
  biblioteca.adicionarLivro({
    titulo: "teste2",
    autor: "autor2",
    genero: "Drama",
    disponivel: false
  });
  biblioteca.adicionarLivro({
    titulo: "teste3",
    autor: "autor1",
    genero: "Romance",
    disponivel: true
  });
  biblioteca.adicionarLivro({
    titulo: "teste4",
    autor: "autor3",
    genero: "Ficção",
    disponivel: true
  });
  

  const livrosDeRomance = biblioteca.filtrarPorGenero("Romance");
  console.log("Livros do gênero Romance:");
  livrosDeRomance.forEach(livro => console.log(`- ${livro.titulo}`));
  

  const livrosDeMachado = biblioteca.buscarPorAutor("autor1");
  console.log("\nLivros de autor1:");
  livrosDeMachado.forEach(livro => console.log(`- ${livro.titulo}`));
  

  const livrosOrdenadosDisponiveis = biblioteca.obterLivrosDisponiveisOrdenados();
  console.log("\nLivros disponíveis ordenados por ordem alfabetica:");
  livrosOrdenadosDisponiveis.forEach(livro => console.log(`- ${livro.titulo}`));
  