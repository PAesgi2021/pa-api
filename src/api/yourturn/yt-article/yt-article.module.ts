import { Module } from '@nestjs/common';
import { YtArticleService } from './yt-article.service';
import { YtArticleController } from './yt-article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YtArticleRepository } from './yt-article.repository';

@Module({
  imports: [TypeOrmModule.forFeature([YtArticleRepository],'angular')],
  controllers: [YtArticleController],
  providers: [YtArticleService]
})
export class YtArticleModule {}
