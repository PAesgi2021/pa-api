import { Test, TestingModule } from '@nestjs/testing';
import { YtChallengeService } from './yt-challenge.service';

describe('YtChallengeService', () => {
  let service: YtChallengeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtChallengeService],
    }).compile();

    service = module.get<YtChallengeService>(YtChallengeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
