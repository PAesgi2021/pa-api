import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './api/ergon/test/test.controller';
import { YtPostModule } from './api/yourturn/yt-post/yt-post.module';
import { YtPost } from './api/yourturn/yt-post/entities/yt-post.entity';
import { YtUserModule } from './api/yourturn/yt-user/yt-user.module';
import {YtUser} from "./api/yourturn/yt-user/entities/yt-user.entity";
import { MessageModule } from './api/yourturn/message/message.module';
import { Message } from './api/yourturn/message/entities/message.entity';
import { ProfileModule } from './api/yourturn/profile/profile.module';
import { RoleModule } from './api/yourturn/role/role.module';
import { AccountModule } from './api/yourturn/account/account.module';
import { Profile } from './api/yourturn/profile/entities/profile.entity';
import { ProfileRoleModule } from './api/yourturn/profile-role/profile-role.module';
import { ProfileRole } from './api/yourturn/profile-role/entities/profile-role.entity';
import { Role } from './api/yourturn/role/entities/role.entity';
import { Account } from './api/yourturn/account/entities/account.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'pa-angular',
    entities: [YtPost, YtUser, Message, Profile, ProfileRole, Role, Account],
    synchronize: true,
  }),

    YtPostModule, YtUserModule, MessageModule, ProfileModule, RoleModule, AccountModule, ProfileRoleModule],
  controllers: [TestController],
})
export class AppModule {
}
