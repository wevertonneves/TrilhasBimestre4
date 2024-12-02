var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.paraFahrenheit = function () {
        return (this.valor * 9 / 5) + 32;
    };
    Temperatura.prototype.paraKelvin = function () {
        return this.valor + 273.15;
    };
    Temperatura.prototype.exibirTemperaturas = function () {
        console.log("Temperatura em Celsius: ".concat(this.valor, "\u00B0C"));
        console.log("Temperatura em Fahrenheit: ".concat(this.paraFahrenheit(), "\u00B0F"));
        console.log("Temperatura em Kelvin: ".concat(this.paraKelvin(), "K"));
    };
    return Temperatura;
}());
var temperatura = new Temperatura(25);
temperatura.exibirTemperaturas();
