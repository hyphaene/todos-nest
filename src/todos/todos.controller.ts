import {
  Controller,
  Param,
  Get,
  Req,
  Post,
  Delete,
  Body,
  Put,
  Patch,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Request } from 'express';
import { Todo } from './types';

@Controller('todos')
export class AppController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }
  @Get(':id')
  findOne(@Param() params: { id: string }): Todo {
    console.log({ params });
    return this.todosService.findOne(params.id);
  }

  @Post()
  create(@Body() body: { todo: Omit<Todo, 'id'> }): Todo {
    console.log({ body: body });
    return this.todosService.create(body.todo);
  }
  @Patch(':id')
  update(@Req() request: Request): Todo {
    console.log({ params: request.params });
    console.log({ body: request.body });
    return this.todosService.update(request.body.todo);
  }
  @Delete(':id')
  delete(@Param() params: { id: string }): Todo {
    console.log({ params });
    return this.todosService.delete(params.id);
  }
}
