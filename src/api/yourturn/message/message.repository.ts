import { EntityRepository, Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {
  private logger = new Logger('messageRepository');

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {

    const message = new Message();
    message.content = createMessageDto.content;
    message.date = new Date(Date.now());

    try {
      await message.save();
    } catch (error) {
      this.logger.error('Failed to save this message')
      throw new InternalServerErrorException('Internal Server Error!')
    }

    return message;
  }


}