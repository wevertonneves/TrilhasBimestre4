
abstract class Pagamento {
   
    abstract processar(): void;
  }
  
  
  class PagamentoCartao extends Pagamento {
    numeroCartao: string;
    validade: string;
  
    constructor(numeroCartao: string, validade: string) {
      super();
      this.numeroCartao = numeroCartao;
      this.validade = validade;
    }
  
    
    processar(): void {
      if (this.validarCartao()) {
        console.log(`Pagamento com cartão ${this.numeroCartao} processado com sucesso.`);
      } else {
        console.log(`Número do cartão ${this.numeroCartao} inválido.`);
      }
    }
  
  
    private validarCartao(): boolean {
    
      return this.numeroCartao.length === 16;
    }
  }
  

  class PagamentoBoleto extends Pagamento {
    valor: number;
  
    constructor(valor: number) {
      super();
      this.valor = valor;
    }
  
  
    processar(): void {
      const codigoBoleto = this.gerarCodigoBoleto();
      console.log(`Pagamento com boleto gerado. Código do boleto: ${codigoBoleto} para o valor de R$${this.valor}.`);
    }
  
   
    private gerarCodigoBoleto(): string {
     
      return Math.random().toString().slice(2, 14); 
    }
  }
  

  function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento, index) => {
      console.log(`Processando pagamento ${index + 1}:`);
      pagamento.processar();
    });
  }
  
 
  
  
  const pagamentoCartao = new PagamentoCartao("1234567890123456", "12/23");  
  const pagamentoBoleto = new PagamentoBoleto(150.75); 
  
  
  const pagamentos: Pagamento[] = [pagamentoCartao, pagamentoBoleto];
  

  processarPagamentos(pagamentos);
  