import { Test, TestingModule } from '@nestjs/testing';
import { YtChallengeController } from './yt-challenge.controller';
import { YtChallengeService } from './yt-challenge.service';

describe('YtChallengeController', () => {
  let controller: YtChallengeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtChallengeController],
      providers: [YtChallengeService],
    }).compile();

    controller = module.get<YtChallengeController>(YtChallengeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
