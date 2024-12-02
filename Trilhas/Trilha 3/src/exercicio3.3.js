var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao, validade) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        _this.validade = validade;
        return _this;
    }
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            console.log("Pagamento com cart\u00E3o ".concat(this.numeroCartao, " processado com sucesso."));
        }
        else {
            console.log("N\u00FAmero do cart\u00E3o ".concat(this.numeroCartao, " inv\u00E1lido."));
        }
    };
    PagamentoCartao.prototype.validarCartao = function () {
        return this.numeroCartao.length === 16;
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(valor) {
        var _this = _super.call(this) || this;
        _this.valor = valor;
        return _this;
    }
    PagamentoBoleto.prototype.processar = function () {
        var codigoBoleto = this.gerarCodigoBoleto();
        console.log("Pagamento com boleto gerado. C\u00F3digo do boleto: ".concat(codigoBoleto, " para o valor de R$").concat(this.valor, "."));
    };
    PagamentoBoleto.prototype.gerarCodigoBoleto = function () {
        return Math.random().toString().slice(2, 14);
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamentos(pagamentos) {
    pagamentos.forEach(function (pagamento, index) {
        console.log("Processando pagamento ".concat(index + 1, ":"));
        pagamento.processar();
    });
}
var pagamentoCartao = new PagamentoCartao("1234567890123456", "12/23");
var pagamentoBoleto = new PagamentoBoleto(150.75);
var pagamentos = [pagamentoCartao, pagamentoBoleto];
processarPagamentos(pagamentos);
