import { Test, TestingModule } from '@nestjs/testing';
import { YtPostController } from './yt-post.controller';
import { YtPostService } from './yt-post.service';

describe('YtPostController', () => {
  let controller: YtPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtPostController],
      providers: [YtPostService],
    }).compile();

    controller = module.get<YtPostController>(YtPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
