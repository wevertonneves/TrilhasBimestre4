var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco, quantidade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    ItemLoja.prototype.calcularValor = function () {
        return this.preco * this.quantidade;
    };
    ItemLoja.prototype.exibirDetalhes = function () {
        console.log("ID: ".concat(this.id));
        console.log("Nome: ".concat(this.nome));
        console.log("Pre\u00E7o: R$ ".concat(this.preco.toFixed(2)));
        console.log("Quantidade: ".concat(this.quantidade));
        console.log("Valor total em estoque: R$ ".concat(this.calcularValor().toFixed(2)));
    };
    return ItemLoja;
}());
// Exemplo de uso:
var item1 = new ItemLoja(1, "fio 8mm", 9.99, 10);
item1.exibirDetalhes();
var item2 = new ItemLoja(2, "alicate universal", 99.90, 5);
item2.exibirDetalhes();
