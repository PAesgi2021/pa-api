import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateYtPostDto } from './dto/create-yt-post.dto';
import { UpdateYtPostDto } from './dto/update-yt-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtPostRepository } from './yt-post.repository';

@Injectable()
export class YtPostService {

  constructor(@InjectRepository(YtPostRepository) private ytPostRepository: YtPostRepository) {
  }

  create(createYtPostDto: CreateYtPostDto) {
    return this.ytPostRepository.createPost(createYtPostDto);
  }

  findAll() {
    return this.ytPostRepository.find();
  }

  findOneById(id: number) {
    return this.ytPostRepository.findOneOrFail(id);
  }

  update(id: number, updateYtPostDto: UpdateYtPostDto) {
    return this.ytPostRepository.update(id, updateYtPostDto);
  }

  remove(id: number) {
    return this.ytPostRepository.delete(id);
  }
}
