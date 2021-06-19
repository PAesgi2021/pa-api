import { Injectable } from '@nestjs/common';
import { CreateErUserDto } from './dto/create-er-user.dto';
import { UpdateErUserDto } from './dto/update-er-user.dto';

@Injectable()
export class ErUserService {
  create(createErUserDto: CreateErUserDto) {
    return 'This action adds a new erUser';
  }

  findAll() {
    return `This action returns all erUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} erUser`;
  }

  update(id: number, updateErUserDto: UpdateErUserDto) {
    return `This action updates a #${id} erUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} erUser`;
  }
}
