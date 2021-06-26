import { Test, TestingModule } from '@nestjs/testing';
import { YtUserService } from '../yt-user.service';

describe('YtUserService', () => {
  let service: YtUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtUserService],
    }).compile();

    service = module.get<YtUserService>(YtUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
