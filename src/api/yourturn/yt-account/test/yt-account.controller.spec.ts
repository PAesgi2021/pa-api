import { Test, TestingModule } from '@nestjs/testing';
import { YtAccountController } from '../yt-account.controller';
import { YtAccountService } from '../yt-account.service';

describe('AccountController', () => {
  let controller: YtAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtAccountController],
      providers: [YtAccountService],
    }).compile();

    controller = module.get<YtAccountController>(YtAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
