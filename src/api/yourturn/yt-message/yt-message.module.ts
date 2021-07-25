import { Module } from '@nestjs/common';
import { YtMessageService } from './yt-message.service';
import { YtMessageController } from './yt-message.controller';
import { YtMessageRepository } from './yt-message.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtPostRepository } from '../yt-post/yt-post.repository';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';
import {YtPostModule} from "../yt-post/yt-post.module";
import {YtProfileModule} from "../yt-profile/yt-profile.module";


@Module({
  imports: [
    TypeOrmModule.forFeature([YtMessageRepository,YtPostRepository,YtProfileRepository],'angular'),
  ],
  controllers: [YtMessageController],
  providers: [YtMessageService],
})
export class YtMessageModule { }
