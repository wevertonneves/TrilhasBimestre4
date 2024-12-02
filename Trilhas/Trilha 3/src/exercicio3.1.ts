
class Veiculo {
    mover(): void {
      console.log("O veículo está se movendo");
    }
  }
  
 
  class Carro extends Veiculo {
    mover(): void {
      console.log("O carro está dirigindo");
    }
  }
  
 
  class Bicicleta extends Veiculo {
    mover(): void {
      console.log("A bicicleta está pedalando");
    }
  }
  
 
  const meuCarro = new Carro();
  const minhaBicicleta = new Bicicleta();
  
  meuCarro.mover(); 
  minhaBicicleta.mover(); 
  