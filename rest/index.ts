import { TodoRepository } from '../model/repositories/todoRepositories';
function getTasks(){
    return TodoRepository.getTasks();
}
function addTask(task:String){
return TodoRepository.create(task);
}
function deleteTask(idTask:Number){
    return TodoRepository.deleteTask(idTask)
}

export {getTasks,addTask,deleteTask}