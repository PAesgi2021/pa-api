import { Module } from '@nestjs/common';
import { YtUserService } from './yt-user.service';
import { YtUserController } from './yt-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtUserRepository } from './yt-user.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([YtUserRepository]),
  ],
  controllers: [YtUserController],
  providers: [YtUserService],
})
export class YtUserModule {
}
