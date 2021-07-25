import { Module } from '@nestjs/common';
import { YtChallengeService } from './yt-challenge.service';
import { YtChallengeController } from './yt-challenge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtChallengeRepository } from './yt-challenge.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([YtChallengeRepository]),
  ],
  controllers: [YtChallengeController],
  providers: [YtChallengeService]
})
export class YtChallengeModule {}
