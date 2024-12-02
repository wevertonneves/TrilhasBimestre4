class ContaBancaria {

  titular: string;
  saldo: number;


  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

 
  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado com sucesso. Saldo atual: R$ ${this.saldo}`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }

  
  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado com sucesso. Saldo atual: R$ ${this.saldo}`);
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
    } else {
      console.log("Valor de saque inválido.");
    }
  }

 
  exibirSaldo(): void {
    console.log(`Saldo da conta de ${this.titular}: R$ ${this.saldo}`);
  }
}



const minhaConta = new ContaBancaria("Weverton", 1000); 
minhaConta.exibirSaldo(); 

minhaConta.depositar(500); 
minhaConta.sacar(200);     
minhaConta.sacar(1500);    
minhaConta.exibirSaldo(); 
