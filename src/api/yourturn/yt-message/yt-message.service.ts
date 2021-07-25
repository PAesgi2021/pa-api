import { Injectable } from '@nestjs/common';
import { YtCreateMessageDto } from './dto/yt-create-message.dto';
import { YtUpdateMessageDto } from './dto/yt-update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtMessageRepository } from './yt-message.repository';
import { YtPostRepository } from '../yt-post/yt-post.repository';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';
import { YtRoleRepository } from '../yt-role/yt-role.repository';
import { getRepository } from 'typeorm';
import { YtPost } from '../yt-post/entities/yt-post.entity';
import { YtProfile } from '../yt-profile/entities/yt-profile.entity';

@Injectable()
export class YtMessageService {
  constructor(
    @InjectRepository(YtMessageRepository, 'angular')
    private messageRepository: YtMessageRepository,
    @InjectRepository(YtPostRepository, 'angular')
    private postRepository: YtPostRepository,
    @InjectRepository(YtProfileRepository, 'angular')
    private profileRepository: YtProfileRepository,
  ) {}

  getMessages() {
    return this.messageRepository.find();
  }

  async create(createMessageDto: YtCreateMessageDto) {
    const post = await getRepository(YtPost, 'angular').findOneOrFail(
      createMessageDto.post_id,
    );
    const profile = await getRepository(YtProfile, 'angular').findOneOrFail(
      createMessageDto.profile_id,
    );
    return this.messageRepository.createMessage(
      createMessageDto,
      post,
      profile,
    );
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
