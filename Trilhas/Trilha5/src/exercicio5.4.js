var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VoteSystem = /** @class */ (function () {
    function VoteSystem() {
        this.votes = new Map();
    }
    return VoteSystem;
}());
var Election = /** @class */ (function (_super) {
    __extends(Election, _super);
    function Election() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Election.prototype.registrarVoto = function (candidato) {
        var votosAtuais = this.votes.get(candidato) || 0;
        this.votes.set(candidato, votosAtuais + 1);
        console.log("Voto registrado para o candidato \"".concat(candidato, "\"."));
    };
    Election.prototype.obterResultados = function () {
        var resultados = {};
        this.votes.forEach(function (votos, candidato) {
            resultados[candidato] = votos;
        });
        return resultados;
    };
    return Election;
}(VoteSystem));
var Poll = /** @class */ (function (_super) {
    __extends(Poll, _super);
    function Poll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Poll.prototype.registrarVoto = function (candidato) {
        var votosAtuais = this.votes.get(candidato) || 0;
        this.votes.set(candidato, votosAtuais + 1);
        console.log("Voto registrado para a enquete no item \"".concat(candidato, "\"."));
    };
    Poll.prototype.obterResultados = function () {
        return Array.from(this.votes.entries())
            .sort(function (a, b) { return b[1] - a[1]; }) // Ordenar por número de votos (decrescente)
            .map(function (_a) {
            var candidato = _a[0], votos = _a[1];
            return ({ candidato: candidato, votos: votos });
        });
    };
    return Poll;
}(VoteSystem));
var election = new Election();
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
var poll = new Poll();
poll.registrarVoto("BOLA");
poll.registrarVoto("BONE");
poll.registrarVoto("LUVA");
poll.registrarVoto("BOLA");
poll.registrarVoto("BOLA");
console.log("\nResultados da Enquete:");
console.log(poll.obterResultados());
