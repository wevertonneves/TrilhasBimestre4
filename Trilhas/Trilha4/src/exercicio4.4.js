var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
var minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivro({ titulo: "teste1", autor: "desconhecido", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "teste2", autor: "desconhecido", disponivel: false });
minhaBiblioteca.adicionarLivro({ titulo: "teste3", autor: "desconhecido", disponivel: true });
var livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
console.log("Livros disponíveis:");
livrosDisponiveis.forEach(function (livro) {
    console.log("T\u00EDtulo: ".concat(livro.titulo, ", Autor: ").concat(livro.autor));
});
