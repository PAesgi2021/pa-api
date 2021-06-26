import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtPostRepository } from '../yt-post/yt-post.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([MessageRepository, YtPostRepository]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {
}
