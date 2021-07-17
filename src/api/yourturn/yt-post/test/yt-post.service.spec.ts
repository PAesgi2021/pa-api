import { Test, TestingModule } from '@nestjs/testing';
import { YtPostService } from '../yt-post.service';

describe('YtPostService', () => {
  let service: YtPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtPostService],
    }).compile();

    service = module.get<YtPostService>(YtPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
