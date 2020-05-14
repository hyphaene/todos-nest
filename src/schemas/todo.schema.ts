import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop()
  authorId: string;

  @Prop()
  completed: boolean;

  @Prop()
  title: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
