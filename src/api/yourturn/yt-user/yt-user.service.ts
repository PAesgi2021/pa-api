import { Injectable } from '@nestjs/common';
import { CreateYtUserDto } from './dto/create-yt-user.dto';
import { UpdateYtUserDto } from './dto/update-yt-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtUserRepository } from './yt-user.repository';


@Injectable()
export class YtUserService {

  constructor(
    @InjectRepository(YtUserRepository) private ytUserRepository: YtUserRepository
  ) {
  }

  create(createYtUserDto: CreateYtUserDto) {
    return 'This action adds a new ytUser';
  }

  findAll() {
    return this.ytUserRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ytUser`;
  }

  update(id: number, updateYtUserDto: UpdateYtUserDto) {
    return `This action updates a #${id} ytUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} ytUser`;
  }
}
