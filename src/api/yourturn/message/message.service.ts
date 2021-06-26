import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageRepository } from './message.repository';
import { YtPostRepository } from '../yt-post/yt-post.repository';


@Injectable()
export class MessageService {

  constructor(
    @InjectRepository(MessageRepository) private messageRepository: MessageRepository,
    @InjectRepository(YtPostRepository) private postRepository: YtPostRepository,
  ) {
  }

  getMessages() {
    return this.messageRepository.find();
  }

  async create(createMessageDto: CreateMessageDto) {
    const post = await this.postRepository.findOneOrFail(createMessageDto.post_id);
    return this.messageRepository.createMessage(createMessageDto, post);
  }

  findOne(id: number) {
    return this.messageRepository.findOneOrFail(id);
  }


  update(id: number, updateMessageDto: UpdateMessageDto) {
    return this.messageRepository.update(id, updateMessageDto);
  }

  remove(id: number) {
    return this.messageRepository.delete(id);
  }
}
