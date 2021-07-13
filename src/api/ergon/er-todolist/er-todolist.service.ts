import {Injectable, Logger} from '@nestjs/common';
import { ErTodolistDto } from './dto/er-todolist.dto';
import { UpdateErTodolistDto } from './dto/update-er-todolist.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {ErSpaceRepository} from "../er-space/er-space.repository";
import {ErTodolistRepository} from "./er-space.repository";

@Injectable()
export class ErTodolistService {

  private logger = new Logger('ErUserService');
  constructor(
      @InjectRepository(ErTodolistRepository)
      private erTodolistRepository: ErTodolistRepository,

  ) { }
  create(createErTodolistDto: ErTodolistDto) {
    return this.erTodolistRepository.createTodolist(createErTodolistDto);
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
