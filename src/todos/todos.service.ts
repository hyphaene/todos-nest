import { Injectable } from '@nestjs/common';
import { Todo } from './types';

let counter = 0;
let todos: Todo[] = [
  { id: 'dz', title: 'remplir les impôts', completed: false },
  { id: 'dazdzad', title: 'compter les fraises', completed: false },
  { id: 'dzss', title: 'acheter des bananes', completed: false },
  { id: 'dzazds', title: 'manger les pommes', completed: true },
];

@Injectable()
export class TodosService {
  findAll(): Todo[] {
    return todos;
  }
  findOne(id: string): Todo {
    return todos.find(item => item.id === id);
  }
  create(todo: Omit<Todo, 'id'>): Todo {
    const newItem = {
      id: `${'a' + counter}`,
      ...todo,
    };
    counter++;
    todos.push(newItem);
    return newItem;
  }
  update(todo: Todo): Todo {
    todos = todos.map(item => (item.id === todo.id ? todo : item));
    return todo;
  }
  delete(id: string): Todo {
    const toBeDeleted = todos.find(item => item.id === id);
    todos = todos.filter(item => item.id !== id);
    return toBeDeleted;
  }
}
