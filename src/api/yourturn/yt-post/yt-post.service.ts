import { Injectable } from '@nestjs/common';
import { CreateYtPostDto } from './dto/create-yt-post.dto';
import { UpdateYtPostDto } from './dto/update-yt-post.dto';

@Injectable()
export class YtPostService {
  create(createYtPostDto: CreateYtPostDto) {
    return 'This action adds a new ytPost';
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
