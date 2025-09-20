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
// 1. Classe Base - Veiculo
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Veiculo.prototype.exibirInfo = function () {
        console.log("Marca: ".concat(this.marca));
        console.log("Modelo: ".concat(this.modelo));
        console.log("Ano: ".concat(this.ano));
    };
    return Veiculo;
}());
// 2. Subclasse - Carro (Herda de Veiculo)
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, ano, numeroDePortas) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    // Sobrescreve o método exibirInfo() da classe base
    Carro.prototype.exibirInfo = function () {
        console.log("--- Informacoes do Carro ---");
        _super.prototype.exibirInfo.call(this); // Chama o método da classe pai
        console.log("Numero de Portas: ".concat(this.numeroDePortas));
        console.log("----------------------------");
    };
    return Carro;
}(Veiculo));
// 3. Subclasse - Moto (Herda de Veiculo)
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, ano, tipoDeGuidao) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.tipoDeGuidao = tipoDeGuidao;
        return _this;
    }
    // Sobrescreve o método exibirInfo() da classe base
    Moto.prototype.exibirInfo = function () {
        console.log("--- Informacoes da Moto ---");
        _super.prototype.exibirInfo.call(this); // Chama o método da classe pai
        console.log("Tipo de Guidao: ".concat(this.tipoDeGuidao));
        console.log("---------------------------");
    };
    return Moto;
}(Veiculo));
// --- Exemplo de Uso ---
// Instanciando um Carro
var meuCarro = new Carro("Toyota", "Corolla", 2022, 4);
meuCarro.exibirInfo();
// Instanciando uma Moto
var minhaMoto = new Moto("Honda", "CBR 600RR", 2023, "Esportivo");
minhaMoto.exibirInfo();
