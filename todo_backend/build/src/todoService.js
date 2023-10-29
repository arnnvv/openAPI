"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mocked_todo",
            description: "blaj blah",
            done: false,
        };
    }
    create(todoCreationParams) {
        console.log("mock_DB call");
        return {
            id: "1",
            title: "mocked_todo",
            description: "blaj blah",
            done: false,
        };
    }
}
exports.TodoService = TodoService;
