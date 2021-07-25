import { Test, TestingModule } from '@nestjs/testing';
import { YtRoleService } from '../yt-role.service';

describe('RoleService', () => {
  let service: YtRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtRoleService],
    }).compile();

    service = module.get<YtRoleService>(YtRoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
