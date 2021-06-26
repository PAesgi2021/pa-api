import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './api/ergon/test/test.controller';
import { YtPostModule } from './api/yourturn/yt-post/yt-post.module';
import { YtPost } from './api/yourturn/yt-post/entities/yt-post.entity';
import { YtUserModule } from './api/yourturn/yt-user/yt-user.module';
import {YtUser} from "./api/yourturn/yt-user/entities/yt-user.entity";
import { MessageModule } from './api/yourturn/message/message.module';
import { Message } from './api/yourturn/message/entities/message.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'pa-angular',
    entities: [YtPost, YtUser, Message],
    synchronize: true,
  }),

    YtPostModule, YtUserModule, MessageModule],
  controllers: [TestController],
})
export class AppModule {
}
