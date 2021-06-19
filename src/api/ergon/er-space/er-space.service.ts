import { Injectable } from '@nestjs/common';
import { CreateErSpaceDto } from './dto/create-er-space.dto';
import { UpdateErSpaceDto } from './dto/update-er-space.dto';

@Injectable()
export class ErSpaceService {
  create(createErSpaceDto: CreateErSpaceDto) {
    return 'This action adds a new erSpace';
  }

  findAll() {
    return `This action returns all erSpace`;
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
