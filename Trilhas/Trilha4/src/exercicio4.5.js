var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao() {
        this.livros = [];
    }
    BibliotecaGestao.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (livro) { return livro.genero.toLowerCase() === genero.toLowerCase(); });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (livro) { return livro.autor.toLowerCase() === autor.toLowerCase(); });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (livro) { return livro.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    return BibliotecaGestao;
}());
var biblioteca = new BibliotecaGestao();
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
var livrosDeRomance = biblioteca.filtrarPorGenero("Romance");
console.log("Livros do gênero Romance:");
livrosDeRomance.forEach(function (livro) { return console.log("- ".concat(livro.titulo)); });
var livrosDeMachado = biblioteca.buscarPorAutor("autor1");
console.log("\nLivros de autor1:");
livrosDeMachado.forEach(function (livro) { return console.log("- ".concat(livro.titulo)); });
var livrosOrdenadosDisponiveis = biblioteca.obterLivrosDisponiveisOrdenados();
console.log("\nLivros disponíveis ordenados por ordem alfabetica:");
livrosOrdenadosDisponiveis.forEach(function (livro) { return console.log("- ".concat(livro.titulo)); });
