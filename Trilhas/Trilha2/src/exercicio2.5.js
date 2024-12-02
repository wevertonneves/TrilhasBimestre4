var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
        console.log("Compromisso \"".concat(compromisso, "\" adicionado com sucesso."));
    };
    Agenda.prototype.listarCompromissos = function () {
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso na agenda.");
        }
        else {
            console.log("Compromissos na agenda:");
            this.compromissos.forEach(function (compromisso, index) {
                console.log("".concat(index + 1, ". ").concat(compromisso));
            });
        }
    };
    return Agenda;
}());
var minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("levar criaças a escola 7h");
minhaAgenda.adicionarCompromisso("ir para faculdade 18h");
minhaAgenda.listarCompromissos();
