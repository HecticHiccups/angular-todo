import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  /**
   * !Creating input and out property, we need to catch response in parent.
   *  */
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  //Set Dynamic Style Classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };
    return classes;
  }

  /**
   * Created new Output prop EventEmitter
   * Created new Input prop
   * Toggle, it will change to it's opposite value.
   * Toggle in UI & Toggle on Server Response
   *
   * */

  //Toggle
  onToggle(todo) {
    //UI Response
    todo.completed = !todo.completed;
    //Server Response
    this.todoService.toggleComplete(todo).subscribe(todo => console.log(todo));
  }

  /**
   * !We're emiting the response upwards to the parent component.
   *
   */
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
