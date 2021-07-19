import { Injectable } from '@nestjs/common';
import { YtCreateMessageDto } from './dto/yt-create-message.dto';
import { YtUpdateMessageDto } from './dto/yt-update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtMessageRepository } from './yt-message.repository';
import { YtPostRepository } from '../yt-post/yt-post.repository';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';


@Injectable()
export class YtMessageService {

  constructor(
    @InjectRepository(YtMessageRepository) private messageRepository: YtMessageRepository,
    @InjectRepository(YtPostRepository) private postRepository: YtPostRepository,
    @InjectRepository(YtProfileRepository) private profileRepository: YtProfileRepository,
  ) { }

  getMessages() {
    return this.messageRepository.find();
  }

  async create(createMessageDto: YtCreateMessageDto) {
    const post = await this.postRepository.findOneOrFail(createMessageDto.post_id);
    const profile = await this.profileRepository.findOneOrFail(createMessageDto.profile_id);
    return this.messageRepository.createMessage(createMessageDto, post, profile);
  }

  findOne(id: number) {
    return this.messageRepository.findOneOrFail(id);
  }


  update(id: number, updateMessageDto: YtUpdateMessageDto) {
    return this.messageRepository.update(id, updateMessageDto);
  }

  remove(id: number) {
    return this.messageRepository.delete(id);
  }
}
