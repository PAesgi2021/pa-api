import {Module} from '@nestjs/common';
import {TasksModule} from './api/ergon/tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from './auth/auth.module';
import {TodolistModule} from './api/ergon/todolist/todolist.module';
import {TestController} from './api/ergon/test/test.controller';
import {Task} from "./api/ergon/tasks/task.entity";
import {User} from "./auth/user.entity";
import { FooModule } from './foo/foo.module';
import { FooModule } from './api/ergob/foo/foo.module';
import { FooModule } from './api/ergon/foo/foo.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'pgJava',
    entities: [Task, User],
    synchronize: true,
  }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'pgAngular',
    entities: [Task, User],
    synchronize: true,
  }),
    TasksModule, AuthModule, TodolistModule],
  controllers: [TestController],
})
export class AppModule {}
