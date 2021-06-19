import { Injectable } from '@nestjs/common';
import { CreateYtPostDto } from './dto/create-yt-post.dto';
import { UpdateYtPostDto } from './dto/update-yt-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtPostRepository } from './yt-post.repository';
import { YtPost } from './entities/yt-post.entity';


@Injectable()
export class YtPostService {

  constructor(@InjectRepository(YtPostRepository) private ytPostRepository: YtPostRepository) {}

  async create(createYtPostDto: CreateYtPostDto): Promise<YtPost> {
    return this.ytPostRepository.createPost(createYtPostDto);
  }

  findAll() {
    return `This action returns all ytPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ytPost`;
  }

  update(id: number, updateYtPostDto: UpdateYtPostDto) {
    return `This action updates a #${id} ytPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} ytPost`;
  }
}
