import { Module } from '@nestjs/common';
import { YtPostService } from './yt-post.service';
import { YtPostController } from './yt-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtPostRepository } from './yt-post.repository';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';
import { YtChallengeRepository } from '../yt-challenge/yt-challenge.repository';

@Module({
   imports: [
     TypeOrmModule.forFeature([YtPostRepository, YtProfileRepository, YtChallengeRepository]),
   ],
  controllers: [YtPostController],
  providers: [YtPostService]
})
export class YtPostModule {}
