import {Module} from '@nestjs/common';
import {ErTaskModule} from './api/ergon/tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from './auth/auth.module';
import {TodolistModule} from './api/ergon/todolist/todolist.module';
import {TestController} from './api/ergon/test/test.controller';
import {ErTask} from "./api/ergon/tasks/task.entity";
import {User} from "./auth/user.entity";
import {ErUserModule} from './api/ergon/er-user/er-user.module';
import {ErSpaceModule} from './api/ergon/er-space/er-space.module';
import {ErTodolistModule} from './api/ergon/er-todolist/er-todolist.module';
import {ErSpace} from "./api/ergon/er-space/entities/er-space.entity";
import {ErTodolist} from "./api/ergon/er-todolist/entities/er-todolist.entity";
import {ErUser} from "./api/ergon/er-user/entities/er-user.entity";

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'pa-java',
        entities: [ErTask, User, ErSpace, ErTodolist, ErUser],
        synchronize: true,
        keepConnectionAlive: true,
    }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'pa-angular',
            entities: [],
            synchronize: true,
            keepConnectionAlive: true,
        }),
        ErTaskModule, AuthModule, TodolistModule, ErUserModule, ErSpaceModule, ErTodolistModule],
    controllers: [TestController],
})
export class AppModule {
}
