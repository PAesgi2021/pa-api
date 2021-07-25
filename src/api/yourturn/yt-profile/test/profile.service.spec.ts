import { Test, TestingModule } from '@nestjs/testing';
import { YtProfileService } from '../yt-profile.service';

describe('ProfileService', () => {
  let service: YtProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtProfileService],
    }).compile();

    service = module.get<YtProfileService>(YtProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
