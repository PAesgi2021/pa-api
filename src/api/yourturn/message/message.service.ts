import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message} from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService {

  constructor(@InjectRepository(MessageRepository) private messageRepository: MessageRepository) {}

  async getMessages(): Promise<Message[]>{
    return this.messageRepository.getMessage();
  }

  create(createMessageDto: CreateMessageDto) {
    return this.messageRepository.createMessage(createMessageDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
