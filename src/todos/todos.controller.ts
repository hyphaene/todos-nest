import {
  Controller,
  Param,
  Get,
  Req,
  Post,
  Delete,
  Body,
  Patch,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Request } from 'express';
import { Todo } from 'src/schemas/todo.schema';
import { CreateTodoDto } from './dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }
  @Get(':id')
  findOne(@Param() params: { id: string }): Promise<Todo> {
    console.log({ params });
    return this.todosService.findOne(params.id);
  }

  @Post()
  create(@Body() body: CreateTodoDto): Promise<Todo> {
    console.log({ body: body });
    return this.todosService.create(body);
  }
  @Patch(':id')
  update(@Body() todo: Todo): Promise<Todo> {
    console.log('== start update controller');
    console.log({ todo });
    console.log('== end update controller');

    return this.todosService.update(todo);
  }
  @Delete(':id')
  delete(@Param() params: { id: string }): Promise<any> {
    console.log({ params });
    return this.todosService.delete(params.id);
  }
}
