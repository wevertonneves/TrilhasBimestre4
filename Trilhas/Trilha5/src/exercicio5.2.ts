
abstract class Inventory {
    protected items: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}


class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
        console.log(`Adicionado ${quantity} unidades de "${item}" ao armazém.`);
    }

    removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
            console.log(`Item "${item}" removido do armazém.`);
        } else {
            console.log(`Item "${item}" não encontrado no armazém.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}


class StoreInventory extends Inventory {
    private readonly maxQuantityPerItem = 10;

    addItem(item: string, quantity: number): void {
        const currentQuantity = this.items[item] || 0;

        if (currentQuantity + quantity > this.maxQuantityPerItem) {
            console.log(
                `Não é possível adicionar ${quantity} unidades de "${item}". Limite máximo de ${this.maxQuantityPerItem} unidades por item.`
            );
        } else {
            this.items[item] = currentQuantity + quantity;
            console.log(`Adicionado ${quantity} unidades de "${item}" à loja.`);
        }
    }

    removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
            console.log(`Item "${item}" removido da loja.`);
        } else {
            console.log(`Item "${item}" não encontrado na loja.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}


const warehouse = new WarehouseInventory(); //sem limite de itens no estoque
warehouse.addItem("pneu", 50);
warehouse.addItem("cola rato", 30);
warehouse.addItem("fonte 12v alimentação", 300);
warehouse.addItem("tela 21 Polegadas", 500);
warehouse.removeItem("Martelo");
console.log("\nestoque do Armazém:");
console.log(warehouse.getInventory());

const store = new StoreInventory();// loja nao pode passar de 10 un por item
store.addItem("Parafuso", 5);
store.addItem("Porca", 12); //aqui ultrapass por isso nao é armazenada
store.addItem("Porca", 3); 
store.addItem("alicate",10); // dentro do limite
store.removeItem("Parafuso");
console.log("\nestoque da Loja:");
console.log(store.getInventory());
