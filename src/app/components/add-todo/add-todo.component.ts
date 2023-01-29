import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  
  @Output() addTodoEvent = new EventEmitter<string>();
  todoText = "";

  addTodo(){
    this.addTodoEvent.emit(this.todoText)
    this.todoText = ""
  }


}
