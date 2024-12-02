var Loja = /** @class */ (function () {
    function Loja() {
        this.produtos = [];
    }
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        return this.produtos.find(function (produto) { return produto.codigo === codigo; });
    };
    return Loja;
}());
var minhaLoja = new Loja();
minhaLoja.adicionarProduto({ codigo: 1, nome: "farol dianteiro fusca" });
minhaLoja.adicionarProduto({ codigo: 2, nome: "roda liga leve 18" });
minhaLoja.adicionarProduto({ codigo: 3, nome: "bateria 120a" });
var produtoEncontrado = minhaLoja.buscarProdutoPorCodigo(2);
if (produtoEncontrado) {
    console.log("Produto encontrado: C\u00F3digo: ".concat(produtoEncontrado.codigo, ", Nome: ").concat(produtoEncontrado.nome));
}
else {
    console.log("Produto não encontrado.");
}
var produtoInexistente = minhaLoja.buscarProdutoPorCodigo(5);
if (produtoInexistente) {
    console.log("Produto encontrado: C\u00F3digo: ".concat(produtoInexistente.codigo, ", Nome: ").concat(produtoInexistente.nome));
}
else {
    console.log("Produto não encontrado.");
}
