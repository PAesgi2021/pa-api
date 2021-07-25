import { Module } from '@nestjs/common';
import { YtProfileService } from './yt-profile.service';
import { YtProfileController } from './yt-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtProfileRepository } from './yt-profile.repository';
import { YtAccountRepository } from '../yt-account/yt-account.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([YtProfileRepository, YtAccountRepository])
  ],
  controllers: [YtProfileController],
  providers: [YtProfileService]
})
export class YtProfileModule { }
