var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularValorTotal = function () {
        return this.preco * this.quantidade;
    };
    Produto.prototype.exibirDetalhes = function () {
        console.log("Produto: ".concat(this.nome));
        console.log("Pre\u00E7o: R$ ".concat(this.preco.toFixed(2)));
        console.log("Quantidade: ".concat(this.quantidade));
        console.log("Valor total em estoque: R$ ".concat(this.calcularValorTotal().toFixed(2)));
    };
    return Produto;
}());
var produto1 = new Produto("bermuda", 89.99, 169);
produto1.exibirDetalhes();
var produto2 = new Produto("chinelo", 21.90, 500);
produto2.exibirDetalhes();
