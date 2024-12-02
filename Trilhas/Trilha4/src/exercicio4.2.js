var Texto = /** @class */ (function () {
    function Texto(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Texto.prototype.exibir = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Conte\u00FAdo: ").concat(this.conteudo);
    };
    return Texto;
}());
var meuTexto = new Texto("a importancia de abastecer o carro", "se nao colocar gasolina nao anda.");
console.log(meuTexto.exibir());
