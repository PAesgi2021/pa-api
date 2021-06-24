import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {YtPostModule} from './api/yourturn/yt-post/yt-post.module';
import {YtPost} from './api/yourturn/yt-post/entities/yt-post.entity';
import {Message} from './api/yourturn/message/entities/message.entity';
import {MessageModule} from './api/yourturn/message/message.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'pa-angular',
    entities: [YtPost, Message],
    synchronize: true,
  }),

    YtPostModule, MessageModule],
  controllers: [],
})
export class AppModule {}
