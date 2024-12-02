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
var FavoriteManager = /** @class */ (function () {
    function FavoriteManager() {
        this.favorites = [];
    }
    return FavoriteManager;
}());
var MoviesFavoriteManager = /** @class */ (function (_super) {
    __extends(MoviesFavoriteManager, _super);
    function MoviesFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoviesFavoriteManager.prototype.addFavorite = function (item) {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            console.log("Filme \"".concat(item, "\" adicionado aos favoritos."));
        }
        else {
            console.log("O filme \"".concat(item, "\" j\u00E1 est\u00E1 na lista de favoritos."));
        }
    };
    MoviesFavoriteManager.prototype.getFavorites = function () {
        return this.favorites.sort(function (a, b) { return a.localeCompare(b); });
    };
    return MoviesFavoriteManager;
}(FavoriteManager));
var BooksFavoriteManager = /** @class */ (function (_super) {
    __extends(BooksFavoriteManager, _super);
    function BooksFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooksFavoriteManager.prototype.addFavorite = function (item) {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item);
            console.log("Livro \"".concat(item, "\" adicionado aos favoritos."));
        }
        else {
            console.log("O livro \"".concat(item, "\" j\u00E1 est\u00E1 na lista de favoritos."));
        }
    };
    BooksFavoriteManager.prototype.getFavorites = function () {
        return this.favorites;
    };
    return BooksFavoriteManager;
}(FavoriteManager));
var movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("filme1");
movieManager.addFavorite("filme2");
movieManager.addFavorite("filme1"); // Duplicado
movieManager.addFavorite("filme3");
console.log("\nFilmes Favoritos:");
console.log(movieManager.getFavorites());
console.log("---------------------------------------------");
console.log("---------------------------------------------");
console.log("---------------------------------------------");
var bookManager = new BooksFavoriteManager();
bookManager.addFavorite("livro1");
bookManager.addFavorite("livro2");
bookManager.addFavorite("livro1"); // Duplicado
bookManager.addFavorite("livro3");
console.log("\nLivros Favoritos:");
console.log(bookManager.getFavorites());
