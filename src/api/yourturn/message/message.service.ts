import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService {

  constructor(@InjectRepository(MessageRepository) private messageRepository: MessageRepository) {}

  getMessages() {
    return this.messageRepository.find();
  }

  create(createMessageDto: CreateMessageDto) {
    return this.messageRepository.createMessage(createMessageDto);
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
