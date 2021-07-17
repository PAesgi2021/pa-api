import { EntityRepository, Repository } from 'typeorm';
import { YtMessage } from './entities/yt-message.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { YtPost } from '../yt-post/entities/yt-post.entity';
import { YtCreateMessageDto } from './dto/yt-create-message.dto';

@EntityRepository(YtMessage)
export class YtMessageRepository extends Repository<YtMessage> {
  private logger = new Logger('messageRepository');

  async createMessage(createMessageDto: YtCreateMessageDto, post: YtPost): Promise<YtMessage> {

    const message = new YtMessage();
    message.content = createMessageDto.content;
    message.createAt = new Date(Date.now());
    message.post = post;
    message.likes = 0;

    try {
      await message.save();
    } catch (error) {
      this.logger.error('Failed to save this yt-message');
      throw new InternalServerErrorException('Internal Server Error!');
    }

    return message;
  }


}