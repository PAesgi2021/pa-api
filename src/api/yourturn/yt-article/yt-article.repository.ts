import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { YtArticle } from './entities/yt-article.entity';
import { CreateYtArticleDto } from './dto/create-yt-article.dto';


@EntityRepository(YtArticle)
export class YtArticleRepository extends Repository<YtArticle> {
  private logger = new Logger('articleRepository');

  async createArticle(dto: CreateYtArticleDto): Promise<YtArticle> {

    const article = new YtArticle();
    article.name = dto.name;
    article.description = dto.description || '';
    article.price = dto.price;
    article.number = 0;

    try {
      await this.save(article);
    } catch (error) {
      this.logger.error('Failed to register account');
      throw new InternalServerErrorException('Internal Server Error!');
    }

    return article;
  }

}
