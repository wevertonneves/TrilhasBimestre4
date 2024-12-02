var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas, lido) {
        if (lido === void 0) { lido = false; }
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    Livro.prototype.marcarComoLido = function () {
        if (!this.lido) {
            this.lido = true;
            console.log("O livro \"".concat(this.titulo, "\" foi marcado como lido."));
        }
        else {
            console.log("O livro \"".concat(this.titulo, "\" j\u00E1 estava marcado como lido."));
        }
    };
    Livro.prototype.exibirStatus = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Autor: ".concat(this.autor));
        console.log("P\u00E1ginas: ".concat(this.paginas));
        console.log("Lido: ".concat(this.lido ? "Sim" : "Não"));
    };
    return Livro;
}());
var meuLivro = new Livro("A volta dos que nao forao", "desconecido", 256);
meuLivro.exibirStatus();
meuLivro.marcarComoLido();
meuLivro.exibirStatus();
