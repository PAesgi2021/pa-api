import { Injectable } from '@nestjs/common';
import { CreateYtArticleDto } from './dto/create-yt-article.dto';
import { UpdateYtArticleDto } from './dto/update-yt-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtArticleRepository } from './yt-article.repository';
import { YtRoleRepository } from '../yt-role/yt-role.repository';

@Injectable()
export class YtArticleService {
  constructor(
    @InjectRepository(YtArticleRepository, 'angular')
    private articleRepository: YtArticleRepository,
  ) {}

  create(createYtArticleDto: CreateYtArticleDto) {
    return this.articleRepository.createArticle(createYtArticleDto);
  }

  findAll() {
    return this.articleRepository.find();
  }

  findOne(id: number) {
    return this.articleRepository.findOne(id);
  }

  update(id: number, updateYtArticleDto: UpdateYtArticleDto) {
    return this.articleRepository.update(id, updateYtArticleDto);
  }

  remove(id: number) {
    return this.articleRepository.delete(id);
  }
}
