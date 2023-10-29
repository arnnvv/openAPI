// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Todo } from "./todo";
import { TodoCreationParams, TodoService } from "./todoService";

@Route("todo")
export class TodoController extends Controller {
  @Get("{todoId}")
  public async get  getTodo(
    @Path() todoId: string
  ){
    let todoService = new TodoService();
    return todoService.get(todoId)
  }
}
