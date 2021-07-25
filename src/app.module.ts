import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './api/ergon/test/test.controller';
import { YtPostModule } from './api/yourturn/yt-post/yt-post.module';
import { YtPost } from './api/yourturn/yt-post/entities/yt-post.entity';
import { YtMessageModule } from './api/yourturn/yt-message/yt-message.module';
import { YtMessage } from './api/yourturn/yt-message/entities/yt-message.entity';
import { YtProfileModule } from './api/yourturn/yt-profile/yt-profile.module';
import { YtRoleModule } from './api/yourturn/yt-role/yt-role.module';
import { YtAccountModule } from './api/yourturn/yt-account/yt-account.module';
import { YtProfile } from './api/yourturn/yt-profile/entities/yt-profile.entity';
import { YtRole } from './api/yourturn/yt-role/entities/yt-role.entity';
import { YtAccount } from './api/yourturn/yt-account/entities/yt-account.entity';
import { YtChallengeModule } from './api/yourturn/yt-challenge/yt-challenge.module';
import { YtChallenge } from './api/yourturn/yt-challenge/entities/yt-challenge.entity';
import { YtArticleModule } from './api/yourturn/yt-article/yt-article.module';
import { YtArticle } from './api/yourturn/yt-article/entities/yt-article.entity';
import { ErTaskModule } from './api/ergon/tasks/tasks.module';
import { ErTask } from './api/ergon/tasks/task.entity';
import { ErUserModule } from './api/ergon/er-user/er-user.module';
import { ErSpaceModule } from './api/ergon/er-space/er-space.module';
import { ErTodolistModule } from './api/ergon/er-todolist/er-todolist.module';
import { ErSpace } from './api/ergon/er-space/entities/er-space.entity';
import { ErTodolist } from './api/ergon/er-todolist/entities/er-todolist.entity';
import { ErUser } from './api/ergon/er-user/entities/er-user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      name: 'angular',
      database: 'pa-angular',
      entities: [
        YtPost,
        YtMessage,
        YtProfile,
        YtRole,
        YtAccount,
        YtChallenge,
        YtArticle,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pa-java',
      name: 'java',
      entities: [ErTask, ErSpace, ErTodolist, ErUser],
      synchronize: true,
      keepConnectionAlive: true,
    }),
    YtPostModule,
    YtMessageModule,
    YtProfileModule,
    YtRoleModule,
    YtAccountModule,
    YtChallengeModule,
    YtArticleModule,
    ErTaskModule,
    ErUserModule,
    ErSpaceModule,
    ErTodolistModule,
  ],
  controllers: [TestController],
  providers: [],
})
export class AppModule {}
