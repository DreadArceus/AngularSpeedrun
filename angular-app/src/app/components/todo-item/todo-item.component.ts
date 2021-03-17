import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input('TodoData') data: TodoItem = {
    title: 'default text',
    completed: false,
  };
  @Input() key: number = -1;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor() {}

  toggleComplete(): void {
    this.data.completed = !this.data.completed;
  }

  deleteTodo(): void {
    this.delete.emit(this.key);
  }
}
