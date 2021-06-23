import { Module } from '@nestjs/common';
import { YtPostService } from './yt-post.service';
import { YtPostController } from './yt-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtPostRepository } from './yt-post.repository';

@Module({
   imports: [
     TypeOrmModule.forFeature([YtPostRepository]),
   ],
  controllers: [YtPostController],
  providers: [YtPostService]
})
export class YtPostModule {}
