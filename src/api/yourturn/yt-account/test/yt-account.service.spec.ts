import { Test, TestingModule } from '@nestjs/testing';
import { YtAccountService } from '../yt-account.service';

describe('AccountService', () => {
  let service: YtAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtAccountService],
    }).compile();

    service = module.get<YtAccountService>(YtAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
