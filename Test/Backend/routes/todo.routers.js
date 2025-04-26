import { Router } from "express";
import {
  CompleteTodo,
  CreateTodo,
  DeleteTodo,
  ListTodo,
  UpdateTodo,
} from "../controllers/todo.controllers.js";

const TodoRouters = Router();

TodoRouters.post("/create-todo", CreateTodo);
TodoRouters.delete("/delete-todo/:id", DeleteTodo);
TodoRouters.patch("/update-todo/:id", UpdateTodo);
TodoRouters.get("/list-todo", ListTodo);
TodoRouters.patch("/complete-todo/:id/complete", CompleteTodo);

export default TodoRouters;
