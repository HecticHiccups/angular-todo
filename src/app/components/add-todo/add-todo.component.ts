import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"]
})
export class AddTodoComponent implements OnInit {
  /**
   * Catch this event emiter in parent component.
   */
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {}

  ngOnInit() {}

  //Handle Submit
  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
  }
}
