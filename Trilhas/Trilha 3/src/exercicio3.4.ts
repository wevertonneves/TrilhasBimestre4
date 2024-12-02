
abstract class Animal {
    private energia: number;
  
    constructor() {
      this.energia = 50; 
    }
  
  
    comer(): void {
      this.energia += 10;
    }
  
   
    statusEnergia(): void {
      console.log(`${this.constructor.name} - Nível de energia: ${this.energia}`);
    }
  
   
    protected getEnergia(): number {
      return this.energia;
    }
  
    protected setEnergia(energia: number): void {
      this.energia = energia;
    }
  }
  
 
  class Leao extends Animal {
   
    comer(): void {
      console.log("O leão está caçando...");
      this.setEnergia(this.getEnergia() - 20); 
      super.comer(); 
      console.log("O leão caçou e se alimentou.");
    }
  }
  
  
  class Passaro extends Animal {
   
    comer(): void {
      console.log("O pássaro está se alimentando...");
      super.comer(); 
      console.log("O pássaro se alimentou.");
    }
  }
  
  
  function mostrarStatus(animais: Animal[]): void {
    animais.forEach((animal, index) => {
      console.log(`Status do animal ${index + 1}:`);
      animal.statusEnergia();
    });
  }
  
  
  
  const leao = new Leao();
  const passaro = new Passaro();
  
  leao.comer();    
  passaro.comer(); 
  
  
  const animais: Animal[] = [leao, passaro];
  
  
  mostrarStatus(animais);
  