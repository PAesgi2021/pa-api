import { Test, TestingModule } from '@nestjs/testing';
import { YtUserController } from '../yt-user.controller';
import { YtUserService } from '../yt-user.service';

describe('YtUserController', () => {
  let controller: YtUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtUserController],
      providers: [YtUserService],
    }).compile();

    controller = module.get<YtUserController>(YtUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
