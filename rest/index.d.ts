declare function getTasks(): Promise<any>;
declare function addTask(task: String): Promise<any>;
declare function deleteTask(idTask: Number): Promise<any>;
export { getTasks, addTask, deleteTask };
