import { Module } from '@nestjs/common';
import { YtAccountService } from './yt-account.service';
import { YtAccountController } from './yt-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtAccountRepository } from './yt-account.repository';
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./strategy/jwt.strategy";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
      PassportModule,
      JwtModule.register({
          secret: 'supersecretkey$',
          signOptions: {
              expiresIn: 36000,
          },
      }),
    TypeOrmModule.forFeature([YtAccountRepository],'angular'),
  ],
  controllers: [YtAccountController],
  providers: [YtAccountService, JwtStrategy]
})
export class YtAccountModule {}
