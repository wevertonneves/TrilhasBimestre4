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
var Animal = /** @class */ (function () {
    function Animal() {
        this.energia = 50;
    }
    Animal.prototype.comer = function () {
        this.energia += 10;
    };
    Animal.prototype.statusEnergia = function () {
        console.log("".concat(this.constructor.name, " - N\u00EDvel de energia: ").concat(this.energia));
    };
    Animal.prototype.getEnergia = function () {
        return this.energia;
    };
    Animal.prototype.setEnergia = function (energia) {
        this.energia = energia;
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leao.prototype.comer = function () {
        console.log("O leão está caçando...");
        this.setEnergia(this.getEnergia() - 20);
        _super.prototype.comer.call(this);
        console.log("O leão caçou e se alimentou.");
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.comer = function () {
        console.log("O pássaro está se alimentando...");
        _super.prototype.comer.call(this);
        console.log("O pássaro se alimentou.");
    };
    return Passaro;
}(Animal));
function mostrarStatus(animais) {
    animais.forEach(function (animal, index) {
        console.log("Status do animal ".concat(index + 1, ":"));
        animal.statusEnergia();
    });
}
var leao = new Leao();
var passaro = new Passaro();
leao.comer();
passaro.comer();
var animais = [leao, passaro];
mostrarStatus(animais);
