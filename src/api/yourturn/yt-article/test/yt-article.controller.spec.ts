import { Test, TestingModule } from '@nestjs/testing';
import { YtArticleController } from '../yt-article.controller';
import { YtArticleService } from '../yt-article.service';

describe('YtArticleController', () => {
  let controller: YtArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtArticleController],
      providers: [YtArticleService],
    }).compile();

    controller = module.get<YtArticleController>(YtArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
