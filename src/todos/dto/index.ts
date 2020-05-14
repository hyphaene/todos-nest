import { IsString, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  // @IsString()
  readonly authorId: string;

  // @IsBoolean()
  readonly completed: boolean;

  // @IsString()
  readonly title: string;
}
