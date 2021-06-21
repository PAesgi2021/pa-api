import {Injectable, Logger} from '@nestjs/common';
import {CreateErUserDto} from './dto/create-er-user.dto';
import {UpdateErUserDto} from './dto/update-er-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {ErUserRepository} from "./er-user.repository";

@Injectable()
export class ErUserService {

  private logger = new Logger('ErUserService');
  constructor(
      @InjectRepository(ErUserRepository)
      private erUserRepository: ErUserRepository,

  ) { }
  signUp(createErUserDto: CreateErUserDto) {
    return this.erUserRepository.signUp(createErUserDto);
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
