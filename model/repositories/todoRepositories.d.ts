export declare class TodoRepository {
    static create(task: String): Promise<any>;
    static getTasks(): Promise<any>;
    static deleteTask(idTask: Number): Promise<any>;
}
