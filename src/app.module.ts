import {Module} from '@nestjs/common';
import {TasksModule} from './api/ergon/tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from './auth/auth.module';
import {TodolistModule} from './api/ergon/todolist/todolist.module';
import {TestController} from './api/ergon/test/test.controller';
import {Task} from "./api/ergon/tasks/task.entity";
import {User} from "./auth/user.entity";
import { YtPostModule } from './api/yourturn/yt-post/yt-post.module';
import { YtPost } from './api/yourturn/yt-post/entities/yt-post.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'pa-java',
    entities: [Task, User],
    synchronize: true,
  }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'pa-angular',
    entities: [YtPost],
    synchronize: true,
  }),
    TasksModule, AuthModule, TodolistModule, YtPostModule],
  controllers: [TestController],
})
export class AppModule {}
