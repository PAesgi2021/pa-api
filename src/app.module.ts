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


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'pa-angular',
    entities: [YtPost, YtMessage, YtProfile, YtRole, YtAccount],
    synchronize: true,
  }),

    YtPostModule, YtMessageModule, YtProfileModule, YtRoleModule, YtAccountModule],
  controllers: [TestController],
})
export class AppModule {
}
