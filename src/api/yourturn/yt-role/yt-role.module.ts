import { Module } from '@nestjs/common';
import { YtRoleService } from './yt-role.service';
import { YtRoleController } from './yt-role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtRoleRepository } from './yt-role.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([YtRoleRepository]),
  ],
  controllers: [YtRoleController],
  providers: [YtRoleService]
})
export class YtRoleModule {}
