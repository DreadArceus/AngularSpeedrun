import { Component } from '@angular/core';
import { TodoFetchService } from './services/todo-fetch.service';
import { TodoItem } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoFetchService],
})
export class AppComponent {
  title: string = 'angular-app';
  data: TodoItem[] = [];
  newTodoText: string = '';

  constructor(private todoFetchService: TodoFetchService) {
    this.todoFetchService.getTodos().subscribe((data: TodoItem[]) => {
      this.data = data;
    });
  }

  addTodoItem() {
    this.data = [...this.data, { title: this.newTodoText, completed: false }];
    this.newTodoText = '';
  }

  deleteTodoItem(id: number) {
    this.data = [...this.data.slice(0, id), ...this.data.slice(id + 1)];
  }
}
