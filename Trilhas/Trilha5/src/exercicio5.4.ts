abstract class VoteSystem {
    protected votes: Map<string, number> = new Map();
  
    abstract registrarVoto(candidato: string): void;
    abstract obterResultados(): object;
  }
  
  class Election extends VoteSystem {
    registrarVoto(candidato: string): void {
      const votosAtuais = this.votes.get(candidato) || 0;
      this.votes.set(candidato, votosAtuais + 1);
      console.log(`Voto registrado para o candidato "${candidato}".`);
    }
  
    obterResultados(): object {
      const resultados: { [key: string]: number } = {};
      this.votes.forEach((votos, candidato) => {
        resultados[candidato] = votos;
      });
      return resultados;
    }
  }
  
  class Poll extends VoteSystem {
    registrarVoto(candidato: string): void {
      const votosAtuais = this.votes.get(candidato) || 0;
      this.votes.set(candidato, votosAtuais + 1);
      console.log(`Voto registrado para a enquete no item "${candidato}".`);
    }
  
    obterResultados(): object {
      return Array.from(this.votes.entries())
        .sort((a, b) => b[1] - a[1]) // Ordenar por número de votos (decrescente)
        .map(([candidato, votos]) => ({ candidato, votos }));
    }
  }
  
  const election = new Election();
  election.registrarVoto("Candidato chiru");
  election.registrarVoto("Candidato tiao");
  election.registrarVoto("Candidato rosinha");
  election.registrarVoto("Candidato tiao");
  election.registrarVoto("Candidato chiru");
  election.registrarVoto("Candidato chiru");
  
  console.log("\nResultados da Eleição:");
  console.log(election.obterResultados());

  console.log("_______________________________");
  console.log("_______________________________");

  
  const poll = new Poll();
  poll.registrarVoto("BOLA");
  poll.registrarVoto("BONE");
  poll.registrarVoto("LUVA");
  poll.registrarVoto("BOLA");
  poll.registrarVoto("BOLA");
  
  console.log("\nResultados da Enquete:");
  console.log(poll.obterResultados());
  