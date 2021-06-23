import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../../auth/auth.module';

@Module({
  // imports: [
  //   TypeOrmModule.forFeature([MessageRepository]),
  //   AuthModule,
  // ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule { }
