
interface Documento {
    titulo: string;
    conteudo: string;
    exibir(): string; 
  }
  

  class Texto implements Documento {
    titulo: string;
    conteudo: string;
  
   
    constructor(titulo: string, conteudo: string) {
      this.titulo = titulo;
      this.conteudo = conteudo;
    }
  
   
    exibir(): string {
      return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
  }
  
 
  const meuTexto = new Texto("a importancia de abastecer o carro", "se nao colocar gasolina nao anda.");
  console.log(meuTexto.exibir()); 
  