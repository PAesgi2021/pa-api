import { Module } from '@nestjs/common';
import { YtProfileRoleService } from './yt-profile-role.service';
import { YtProfileRoleController } from './yt-profile-role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtProfileRoleRepository } from './yt-profile-role.repository';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';
import { YtRoleRepository } from '../yt-role/yt-role.repository';
import {YtProfileModule} from "../yt-profile/yt-profile.module";
import {YtRoleModule} from "../yt-role/yt-role.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([YtProfileRoleRepository, YtProfileRepository, YtRoleRepository],'angular')
  ],
  controllers: [YtProfileRoleController],
  providers: [YtProfileRoleService]
})
export class YtProfileRoleModule {}
