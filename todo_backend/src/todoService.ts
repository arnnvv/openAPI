import { publicDecrypt } from "crypto";
import { Todo } from "./todo";
import { title } from "process";

export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodoService {
  public get(todoId: string): Todo {
    return {
      id: todoId,
      title: "mocked_todo",
      description: "blaj blah",
      done: false,
    };
  }
}
