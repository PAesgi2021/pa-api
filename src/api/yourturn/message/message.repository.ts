import { EntityRepository, Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { YtPost } from '../yt-post/entities/yt-post.entity';

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {
  private logger = new Logger('messageRepository');

  async createMessage(createMessageDto: CreateMessageDto, post: YtPost): Promise<Message> {

    const message = new Message();
    message.content = createMessageDto.content;
    message.date = new Date(Date.now());
    message.post = post;

    try {
      await message.save();
    } catch (error) {
      this.logger.error('Failed to save this message')
      throw new InternalServerErrorException('Internal Server Error!')
    }

    return message;
  }


}