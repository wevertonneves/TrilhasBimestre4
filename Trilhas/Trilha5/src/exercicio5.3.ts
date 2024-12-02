
abstract class FavoriteManager {
    protected favorites: string[] = [];

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}


class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            console.log(`Filme "${item}" adicionado aos favoritos.`);
        } else {
            console.log(`O filme "${item}" já está na lista de favoritos.`);
        }
    }

    getFavorites(): string[] {
        return this.favorites.sort((a, b) => a.localeCompare(b));
    }
}


class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item);
            console.log(`Livro "${item}" adicionado aos favoritos.`);
        } else {
            console.log(`O livro "${item}" já está na lista de favoritos.`);
        }
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}


const movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("filme1");
movieManager.addFavorite("filme2");
movieManager.addFavorite("filme1"); // Duplicado
movieManager.addFavorite("filme3");

console.log("\nFilmes Favoritos:");
console.log(movieManager.getFavorites());

console.log("---------------------------------------------")
console.log("---------------------------------------------")
console.log("---------------------------------------------")

const bookManager = new BooksFavoriteManager();
bookManager.addFavorite("livro1");
bookManager.addFavorite("livro2");
bookManager.addFavorite("livro1"); // Duplicado
bookManager.addFavorite("livro3");

console.log("\nLivros Favoritos:");
console.log(bookManager.getFavorites());
