import { Injectable } from '@nestjs/common';
// import { Todo } from './interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto';
import { Todo } from '../schemas/todo.schema';

// const counter = 0;
// const todos: Todo[] = [
//   { id: 'dz', title: 'remplir les impôts', completed: false },
//   { id: 'dazdzad', title: 'compter les fraises', completed: false },
//   { id: 'dzss', title: 'acheter des bananes', completed: false },
//   { id: 'dzazds', title: 'manger les pommes', completed: true },
// ];

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  create(createCatDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createCatDto);
    return createdTodo.save();
  }

  findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  findOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({ _id: id }).exec();
  }

  async update(todo: Todo): Promise<Todo> {
    return await this.todoModel
      .findOneAndUpdate({ _id: todo._id }, todo)
      .exec();
  }
  async delete(id: string): Promise<any> {
    const res = await this.todoModel.deleteOne({ _id: id }).exec();
    console.log('=== delete start ===');
    console.log(res);
    console.log('=== delete end ===');
    return res;
  }
}
