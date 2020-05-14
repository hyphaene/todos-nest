import { Module } from '@nestjs/common';
import { AppController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TodosService],
})
export class TodosModule {}
