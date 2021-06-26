import { Test, TestingModule } from '@nestjs/testing';
import { YtMessageService } from '../yt-message.service';

describe('MessageService', () => {
  let service: YtMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtMessageService],
    }).compile();

    service = module.get<YtMessageService>(YtMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
