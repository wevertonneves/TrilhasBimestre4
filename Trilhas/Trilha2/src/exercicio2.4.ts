class Temperatura {

    valor: number;
  
    
    constructor(valor: number) {
      this.valor = valor;
    }
  
 
    paraFahrenheit(): number {
      return (this.valor * 9/5) + 32;
    }
  
    
    paraKelvin(): number {
      return this.valor + 273.15;
    }
  
  
    exibirTemperaturas(): void {
      console.log(`Temperatura em Celsius: ${this.valor}°C`);
      console.log(`Temperatura em Fahrenheit: ${this.paraFahrenheit()}°F`);
      console.log(`Temperatura em Kelvin: ${this.paraKelvin()}K`);
    }
  }
  

  
  const temperatura = new Temperatura(25); 
  temperatura.exibirTemperaturas(); 
  
  
  