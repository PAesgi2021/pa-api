import { Test, TestingModule } from '@nestjs/testing';
import { YtMessageController } from '../yt-message.controller';
import { YtMessageService } from '../yt-message.service';

describe('MessageController', () => {
  let controller: YtMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtMessageController],
      providers: [YtMessageService],
    }).compile();

    controller = module.get<YtMessageController>(YtMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
