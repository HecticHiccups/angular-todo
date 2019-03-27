import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

//Component Info
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  //Create todos property, takes an array of Todos which are objects.
  todos: Todo[];

  //Initialize Your Services, bind variables to service
  constructor(private todoService: TodoService) {}

  //Lifecycle method, runs right away, move data to a service!
  ngOnInit() {
    //Pulling data from the Service.
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  /**
   * Delete from the UI
   * Delete from the Server
   *
   */
  deleteTodo(todo: Todo) {
    //Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Remove from Server
    this.todoService.deleteTodos(todo).subscribe();
  }

  /**
   * @param todo
   *
   *
   */
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
