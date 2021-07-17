import { Module } from '@nestjs/common';
import { YtAccountService } from './yt-account.service';
import { YtAccountController } from './yt-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtAccountRepository } from './yt-account.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([YtAccountRepository]),
  ],
  controllers: [YtAccountController],
  providers: [YtAccountService]
})
export class YtAccountModule {}
