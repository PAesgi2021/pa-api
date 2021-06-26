import { Injectable } from '@nestjs/common';
import { CreateYtUserDto } from './dto/create-yt-user.dto';
import { UpdateYtUserDto } from './dto/update-yt-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtUserRepository } from './yt-user.repository';


@Injectable()
export class YtUserService {

  constructor(
    @InjectRepository(YtUserRepository) private ytUserRepository: YtUserRepository,
  ) {
  }

  create(createYtUserDto: CreateYtUserDto) {
    return this.ytUserRepository.create(createYtUserDto);
  }

  findAll() {
    return this.ytUserRepository.find();
  }

  findOne(id: number) {
    return this.ytUserRepository.findOneOrFail(id);
  }

  update(id: number, updateYtUserDto: UpdateYtUserDto) {
    return this.ytUserRepository.update(id, updateYtUserDto);
  }

  remove(id: number) {
    return this.ytUserRepository.delete(id);
  }
}
