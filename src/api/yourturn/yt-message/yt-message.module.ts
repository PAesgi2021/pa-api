import { Module } from '@nestjs/common';
import { YtMessageService } from './yt-message.service';
import { YtMessageController } from './yt-message.controller';
import { YtMessageRepository } from './yt-message.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtPostRepository } from '../yt-post/yt-post.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([YtMessageRepository, YtPostRepository]),
  ],
  controllers: [YtMessageController],
  providers: [YtMessageService],
})
export class YtMessageModule { }