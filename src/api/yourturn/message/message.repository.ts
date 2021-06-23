import { EntityRepository, Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {
  private logger = new Logger('messageRepository');

  async getMessage(): Promise<Message[]> {
      return await this.getMessage();
  }

  async createMessage(): Promise<Message> {

    const message = new Message();
    message.text = "text";
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