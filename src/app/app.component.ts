import { Component } from "@angular/core";

//Recommended to use typescript for type checking.

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Assesment";

  //Set values, call methods.
  constructor() {
    this.name = "roger";
    this.changeName("ted");
  }

  //methods
  changeName(name: string): void {
    this.name = name;
  }
}
