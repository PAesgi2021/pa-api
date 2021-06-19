import { PartialType } from '@nestjs/mapped-types';
import { CreateErTodolistDto } from './create-er-todolist.dto';

export class UpdateErTodolistDto extends PartialType(CreateErTodolistDto) {}
