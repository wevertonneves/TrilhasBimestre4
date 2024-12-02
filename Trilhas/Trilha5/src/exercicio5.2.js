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
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = {};
    }
    return Inventory;
}());
var WarehouseInventory = /** @class */ (function (_super) {
    __extends(WarehouseInventory, _super);
    function WarehouseInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarehouseInventory.prototype.addItem = function (item, quantity) {
        if (this.items[item]) {
            this.items[item] += quantity;
        }
        else {
            this.items[item] = quantity;
        }
        console.log("Adicionado ".concat(quantity, " unidades de \"").concat(item, "\" ao armaz\u00E9m."));
    };
    WarehouseInventory.prototype.removeItem = function (item) {
        if (this.items[item]) {
            delete this.items[item];
            console.log("Item \"".concat(item, "\" removido do armaz\u00E9m."));
        }
        else {
            console.log("Item \"".concat(item, "\" n\u00E3o encontrado no armaz\u00E9m."));
        }
    };
    WarehouseInventory.prototype.getInventory = function () {
        return this.items;
    };
    return WarehouseInventory;
}(Inventory));
var StoreInventory = /** @class */ (function (_super) {
    __extends(StoreInventory, _super);
    function StoreInventory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxQuantityPerItem = 10;
        return _this;
    }
    StoreInventory.prototype.addItem = function (item, quantity) {
        var currentQuantity = this.items[item] || 0;
        if (currentQuantity + quantity > this.maxQuantityPerItem) {
            console.log("N\u00E3o \u00E9 poss\u00EDvel adicionar ".concat(quantity, " unidades de \"").concat(item, "\". Limite m\u00E1ximo de ").concat(this.maxQuantityPerItem, " unidades por item."));
        }
        else {
            this.items[item] = currentQuantity + quantity;
            console.log("Adicionado ".concat(quantity, " unidades de \"").concat(item, "\" \u00E0 loja."));
        }
    };
    StoreInventory.prototype.removeItem = function (item) {
        if (this.items[item]) {
            delete this.items[item];
            console.log("Item \"".concat(item, "\" removido da loja."));
        }
        else {
            console.log("Item \"".concat(item, "\" n\u00E3o encontrado na loja."));
        }
    };
    StoreInventory.prototype.getInventory = function () {
        return this.items;
    };
    return StoreInventory;
}(Inventory));
var warehouse = new WarehouseInventory(); //sem limite de itens no estoque
warehouse.addItem("pneu", 50);
warehouse.addItem("cola rato", 30);
warehouse.addItem("fonte 12v alimentação", 300);
warehouse.addItem("tela 21 Polegadas", 500);
warehouse.removeItem("Martelo");
console.log("\nestoque do Armazém:");
console.log(warehouse.getInventory());
var store = new StoreInventory(); // loja nao pode passar de 10 un por item
store.addItem("Parafuso", 5);
store.addItem("Porca", 12); //aqui ultrapass por isso nao é armazenada
store.addItem("Porca", 3);
store.addItem("alicate", 10); // dentro do limite
store.removeItem("Parafuso");
console.log("\nestoque da Loja:");
console.log(store.getInventory());
