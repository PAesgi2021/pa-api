import { Test, TestingModule } from '@nestjs/testing';
import { YtProfileController } from '../yt-profile.controller';
import { YtProfileService } from '../yt-profile.service';

describe('ProfileController', () => {
  let controller: YtProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtProfileController],
      providers: [YtProfileService],
    }).compile();

    controller = module.get<YtProfileController>(YtProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
