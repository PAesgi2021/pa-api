import { Test, TestingModule } from '@nestjs/testing';
import { YtRoleController } from '../yt-role.controller';
import { YtRoleService } from '../yt-role.service';

describe('RoleController', () => {
  let controller: YtRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtRoleController],
      providers: [YtRoleService],
    }).compile();

    controller = module.get<YtRoleController>(YtRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
