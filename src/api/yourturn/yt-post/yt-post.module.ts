import { Module } from '@nestjs/common';
import { YtPostService } from './yt-post.service';
import { YtPostController } from './yt-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';
import { YtChallengeRepository } from '../yt-challenge/yt-challenge.repository';
import { YtPostRepository } from './yt-post.repository';
import { YtProfileModule } from '../yt-profile/yt-profile.module';
import { YtChallengeModule } from '../yt-challenge/yt-challenge.module';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [YtPostRepository, YtProfileRepository, YtChallengeRepository],
      'angular',
    ),
  ],
  controllers: [YtPostController],
  providers: [YtPostService],
})
export class YtPostModule {}
