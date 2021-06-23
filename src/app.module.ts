import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TodolistModule} from './api/ergon/todolist/todolist.module';
import {TestController} from './api/ergon/test/test.controller';
import {Task} from "./api/ergon/tasks/task.entity";
import {User} from "./auth/user.entity";
import { YtPostModule } from './api/yourturn/yt-post/yt-post.module';
import { YtPost } from './api/yourturn/yt-post/entities/yt-post.entity';
import { MessageModule } from './api/yourturn/message/message.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'pa-java',
    entities: [Task, User],
    synchronize: true,
  }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'pa-angular',
    entities: [YtPost],
    synchronize: true,
  }),
    TasksModule, AuthModule, TodolistModule, YtPostModule, MessageModule],
  controllers: [TestController],
})

export class AppModule {}
