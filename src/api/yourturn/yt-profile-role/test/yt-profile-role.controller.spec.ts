import { Test, TestingModule } from '@nestjs/testing';
import { YtProfileRoleController } from '../yt-profile-role.controller';
import { YtProfileRoleService } from '../yt-profile-role.service';

describe('YtProfileRoleController', () => {
  let controller: YtProfileRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtProfileRoleController],
      providers: [YtProfileRoleService],
    }).compile();

    controller = module.get<YtProfileRoleController>(YtProfileRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
