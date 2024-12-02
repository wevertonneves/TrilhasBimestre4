
abstract class Funcionario {
    private nome: string;
    private salario: number;
  
    constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
    }
  

    abstract calcularBonus(): number;
  
   
    calcularSalarioComBonus(): number {
      const bonus = this.calcularBonus();
      return this.salario + bonus;
    }
  
   
    getNome(): string {
      return this.nome;
    }
  
    
    getSalario(): number {
      return this.salario;
    }
  }
  

  class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
      super(nome, salario);
    }
  
   
    calcularBonus(): number {
      return this.getSalario() * 0.10; 
    }
  }
  
 
  class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
      super(nome, salario);
    }
  
   
    calcularBonus(): number {
      return this.getSalario() * 0.05; 
    }
  }
  
  
  function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
      const salarioFinal = funcionario.calcularSalarioComBonus();
      console.log(`Nome: ${funcionario.getNome()}`);
      console.log(`Salário: R$${funcionario.getSalario()}`);
      console.log(`Salário com bônus: R$${salarioFinal}`);
      console.log('-------------------');
    });
  }
  
 
  
 
  const gerente = new Gerente("Weverton Thiago", 5000);
  const operario = new Operario("Maria Souza", 2000);
  
  
  const funcionarios: Funcionario[] = [gerente, operario];
  

  calcularSalarioComBonus(funcionarios);
  