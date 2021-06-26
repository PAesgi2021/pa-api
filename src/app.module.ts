import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodolistModule } from './api/ergon/todolist/todolist.module';
import { TestController } from './api/ergon/test/test.controller';
import { YtPostModule } from './api/yourturn/yt-post/yt-post.module';
import { YtPost } from './api/yourturn/yt-post/entities/yt-post.entity';
import { YtUserModule } from './api/yourturn/yt-user/yt-user.module';
import {YtUser} from "./api/yourturn/yt-user/entities/yt-user.entity";


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'pa-angular',
    entities: [YtPost, YtUser],
    entities: [YtPost, Message],
    synchronize: true,
  }),

    YtPostModule, YtUserModule],
  controllers: [TestController],
    YtPostModule, MessageModule],
  controllers: [],
})
export class AppModule {
}
