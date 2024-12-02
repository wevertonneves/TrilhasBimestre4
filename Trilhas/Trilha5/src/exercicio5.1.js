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
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.rawTasks = new Set();
        this.tasks = [];
    }
    TaskManager.prototype.listTasks = function () {
        return this.tasks;
    };
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(projectName) {
        var _this = _super.call(this) || this;
        _this.projectName = projectName;
        return _this;
    }
    Project.prototype.addTask = function (task) {
        if (!this.rawTasks.has(task)) {
            this.rawTasks.add(task);
            this.tasks.push("[Projeto: ".concat(this.projectName, "] ").concat(task));
            console.log("Tarefa \"".concat(task, "\" adicionada ao projeto \"").concat(this.projectName, "\"."));
        }
        else {
            console.log("A tarefa \"".concat(task, "\" j\u00E1 existe no projeto \"").concat(this.projectName, "\"."));
        }
    };
    return Project;
}(TaskManager));
var DailyTasks = /** @class */ (function (_super) {
    __extends(DailyTasks, _super);
    function DailyTasks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyTasks.prototype.addTask = function (task) {
        if (!this.rawTasks.has(task)) {
            this.rawTasks.add(task);
            this.tasks.push("[Di\u00E1ria] ".concat(task));
            console.log("Tarefa di\u00E1ria \"".concat(task, "\" adicionada."));
        }
        else {
            console.log("A tarefa di\u00E1ria \"".concat(task, "\" j\u00E1 existe."));
        }
    };
    return DailyTasks;
}(TaskManager));
var projetoDev = new Project("projeto1");
projetoDev.addTask("tarefa1");
projetoDev.addTask("tarefa2");
projetoDev.addTask("tarefa1"); // Tarefa duplicada
console.log("\nTarefas do projeto:");
console.log(projetoDev.listTasks());
var tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask("tarefa3");
tarefasDiarias.addTask("tarefa4");
tarefasDiarias.addTask("tarefa3"); // Tarefa duplicada
console.log("\nTarefas diárias:");
console.log(tarefasDiarias.listTasks());
