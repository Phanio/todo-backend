"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoRepositories_1 = require("../model/repositories/todoRepositories");
function getTasks() {
    return todoRepositories_1.TodoRepository.getTasks();
}
exports.getTasks = getTasks;
function addTask(task) {
    return todoRepositories_1.TodoRepository.create(task);
}
exports.addTask = addTask;
function deleteTask(idTask) {
    return todoRepositories_1.TodoRepository.deleteTask(idTask);
}
exports.deleteTask = deleteTask;
