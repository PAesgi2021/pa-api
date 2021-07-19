import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {TaskRepository} from "../tasks/task.repository";
import {TodolistRepository} from "./todolist.repository";

@Injectable()
export class TodolistService {

  constructor(
      @InjectRepository(TaskRepository)
      private todolistRepository: TodolistRepository,
  ) { }


  create(createTodolistDto: CreateTodolistDto) {
    return 'This action adds a new todolist';
  }

  findAll() {
    return `This action returns all todolist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todolist`;
  }

  update(id: number, updateTodolistDto: UpdateTodolistDto) {
    return `This action updates a #${id} todolist`;
  }

  async remove(id: number) {
    const result = await this.todolistRepository.delete({id: id});

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }
}
