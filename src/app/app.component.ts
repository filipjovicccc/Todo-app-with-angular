import { Component } from '@angular/core';


interface Todo {
  text: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];

  addTodo(todoText: string){
    this.todos.push({text: todoText})
  }
}
