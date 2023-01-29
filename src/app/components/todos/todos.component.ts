import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todos: {text: string}[] = []

  deleteTodo(index: number){
      this.todos.splice(index, 1)
  }
}
