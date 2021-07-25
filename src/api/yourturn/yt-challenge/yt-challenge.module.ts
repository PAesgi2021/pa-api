import { Module } from '@nestjs/common';
import { YtChallengeService } from './yt-challenge.service';
import { YtChallengeController } from './yt-challenge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtChallengeRepository } from './yt-challenge.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([YtChallengeRepository],'angular'),
  ],
  controllers: [YtChallengeController],
  providers: [YtChallengeService],
  exports: [YtChallengeService]
})
export class YtChallengeModule {}
