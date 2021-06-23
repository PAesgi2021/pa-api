import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TodolistModule} from './api/ergon/todolist/todolist.module';
import {TestController} from './api/ergon/test/test.controller';
import {YtPostModule} from './api/yourturn/yt-post/yt-post.module';
import {YtPost} from './api/yourturn/yt-post/entities/yt-post.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'pa-angular',
    entities: [YtPost],
    synchronize: true,
  }),

     TodolistModule, YtPostModule],
  controllers: [TestController],
})
export class AppModule {}
