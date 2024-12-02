
abstract class TaskManager {
    protected rawTasks: Set<string> = new Set(); 
    protected tasks: string[] = [];
  
   
    abstract addTask(task: string): void;
  
   
    listTasks(): string[] {
      return this.tasks;
    }
  }
  

  class Project extends TaskManager {
    private projectName: string;
  
    constructor(projectName: string) {
      super();
      this.projectName = projectName;
    }
  
    addTask(task: string): void {
      if (!this.rawTasks.has(task)) {
        this.rawTasks.add(task);
        this.tasks.push(`[Projeto: ${this.projectName}] ${task}`);
        console.log(`Tarefa "${task}" adicionada ao projeto "${this.projectName}".`);
      } else {
        console.log(`A tarefa "${task}" já existe no projeto "${this.projectName}".`);
      }
    }
  }
  
  
  class DailyTasks extends TaskManager {
    addTask(task: string): void {
      if (!this.rawTasks.has(task)) {
        this.rawTasks.add(task);
        this.tasks.push(`[Diária] ${task}`);
        console.log(`Tarefa diária "${task}" adicionada.`);
      } else {
        console.log(`A tarefa diária "${task}" já existe.`);
      }
    }
  }
  
  
  const projetoDev = new Project("projeto1");
  projetoDev.addTask("tarefa1");
  projetoDev.addTask("tarefa2");
  projetoDev.addTask("tarefa1"); // Tarefa duplicada
  
  console.log("\nTarefas do projeto:");
  console.log(projetoDev.listTasks());
  
  const tarefasDiarias = new DailyTasks();
  tarefasDiarias.addTask("tarefa3");
  tarefasDiarias.addTask("tarefa4");
  tarefasDiarias.addTask("tarefa3"); // Tarefa duplicada
  
  console.log("\nTarefas diárias:");
  console.log(tarefasDiarias.listTasks());
  