import { Module } from '@nestjs/common';
import { YtProfileService } from './yt-profile.service';
import { YtProfileController } from './yt-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtProfileRepository } from './yt-profile.repository';
import { YtAccountRepository } from '../yt-account/yt-account.repository';
import { YtRoleRepository } from '../yt-role/yt-role.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [YtProfileRepository, YtAccountRepository, YtRoleRepository],
      'angular',
    ),
  ],
  controllers: [YtProfileController],
  providers: [YtProfileService],
})
export class YtProfileModule {}
