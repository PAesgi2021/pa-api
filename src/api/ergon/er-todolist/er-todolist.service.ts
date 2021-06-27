import { Injectable } from '@nestjs/common';
import { ErTodolistDto } from './dto/er-todolist.dto';
import { UpdateErTodolistDto } from './dto/update-er-todolist.dto';

@Injectable()
export class ErTodolistService {
  create(createErTodolistDto: ErTodolistDto) {
    return 'This action adds a new erTodolist';
  }

  findAll() {
    return `This action returns all erTodolist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} erTodolist`;
  }

  update(id: number, updateErTodolistDto: UpdateErTodolistDto) {
    return `This action updates a #${id} erTodolist`;
  }

  remove(id: number) {
    return `This action removes a #${id} erTodolist`;
  }
}
