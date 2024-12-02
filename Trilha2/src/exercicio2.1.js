var ContaBancaria = /** @class */ (function () {
   
    function ContaBancaria(titular, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Dep\u00F3sito de R$ ".concat(valor, " realizado com sucesso. Saldo atual: R$ ").concat(this.saldo));
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    };
    
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$ ".concat(valor, " realizado com sucesso. Saldo atual: R$ ").concat(this.saldo));
        }
        else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        }
        else {
            console.log("Valor de saque inválido.");
        }
    };
    
    ContaBancaria.prototype.exibirSaldo = function () {
        console.log("Saldo da conta de ".concat(this.titular, ": R$ ").concat(this.saldo));
    };
    return ContaBancaria;
}());

var minhaConta = new ContaBancaria("Weverton", 1000); 
minhaConta.exibirSaldo(); 
minhaConta.depositar(500); 
minhaConta.sacar(200); 
minhaConta.sacar(1500); 
minhaConta.exibirSaldo();
