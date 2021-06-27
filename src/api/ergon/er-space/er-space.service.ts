import {BadRequestException, Injectable, Logger, NotFoundException} from '@nestjs/common';

import {UpdateErSpaceDto} from './dto/update-er-space.dto';
import {ErSpaceDTO} from "./dto/er-space.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {ErSpaceRepository} from "./er-space.repository";
import {ErSpaceListDTO} from "./dto/er-spacelist.dto";


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

  update(id: number, updateErSpaceDto: UpdateErSpaceDto) {
    return `This action updates a #${id} erSpace`;
  }

  remove(id: number) {
    return `This action removes a #${id} erSpace`;
  }
}
