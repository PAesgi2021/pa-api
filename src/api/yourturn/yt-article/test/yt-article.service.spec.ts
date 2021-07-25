import { Test, TestingModule } from '@nestjs/testing';
import { YtArticleService } from '../yt-article.service';

describe('YtArticleService', () => {
  let service: YtArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtArticleService],
    }).compile();

    service = module.get<YtArticleService>(YtArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
