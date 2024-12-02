class Agenda {
    
    compromissos: string[];
  
    
    constructor() {
      this.compromissos = [];
    }
  
   
    adicionarCompromisso(compromisso: string): void {
      this.compromissos.push(compromisso);
      console.log(`Compromisso "${compromisso}" adicionado com sucesso.`);
    }
  
    
    listarCompromissos(): void {
      if (this.compromissos.length === 0) {
        console.log("Nenhum compromisso na agenda.");
      } else {
        console.log("Compromissos na agenda:");
        this.compromissos.forEach((compromisso, index) => {
          console.log(`${index + 1}. ${compromisso}`);
        });
      }
    }
  }
  

  
  const minhaAgenda = new Agenda(); 
  
  minhaAgenda.adicionarCompromisso("levar criaças a escola 7h"); 
  minhaAgenda.adicionarCompromisso("ir para faculdade 18h");
 
  
  minhaAgenda.listarCompromissos(); 
  