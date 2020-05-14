import { Module } from '@nestjs/common';
import { TodoController } from './todos.controller';
import { TodosService } from './todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from 'src/schemas/todo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  controllers: [TodoController],
  providers: [TodosService],
})
export class TodosModule {}
