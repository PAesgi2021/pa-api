import {BadRequestException, Injectable, Logger, NotFoundException} from '@nestjs/common';

import {UpdateErSpaceDto} from './dto/update-er-space.dto';
import {ErSpaceDTO} from "./dto/er-space.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {ErSpaceRepository} from "./er-space.repository";
import {ErSpaceListDTO} from "./dto/er-spacelist.dto";
import {ErSpace} from "./entities/er-space.entity";
import {ErUser} from "../er-user/entities/er-user.entity";
import {ErTodolist} from "../er-todolist/entities/er-todolist.entity";
import {ErTask} from "../tasks/task.entity";


@Injectable()
export class ErSpaceService {
  private logger = new Logger('ErUserService');
  constructor(
      @InjectRepository(ErSpaceRepository)
      private erSpaceRepository: ErSpaceRepository,

  ) { }

  async create(erSpaceDto: ErSpaceDTO) {
    return this.erSpaceRepository.createSpace(erSpaceDto);
  }

  async findAll(): Promise<ErSpaceListDTO> {
    const spaces = await this.erSpaceRepository.getAll();

    let response: ErSpaceDTO[] = [];
    if (spaces != null) {
    spaces.forEach(space => {
      console.log(space.author.id);
      response.push({...space})
    });
    const result: ErSpaceListDTO = new ErSpaceListDTO();
    result.spaces = response;
    return result;
    }
    throw new BadRequestException('Invalid user');
  }

  findOne(id: number) {
    return `This action returns a #${id} erSpace`;
  }

  async update(id: number, updateErSpaceDto: UpdateErSpaceDto) {
    let updatedSpace: ErSpace = await ErSpace.findOne({id});
    updatedSpace.visibility = updateErSpaceDto.visibility;
    updatedSpace.tag = updateErSpaceDto.tag;
    updatedSpace.name = updateErSpaceDto.name;
    updatedSpace.description = updateErSpaceDto.description;



    return `This action update a #${id} erSpace`;
  }

  remove(id: number) {
    return `This action removes a #${id} erSpace`;
  }
}
