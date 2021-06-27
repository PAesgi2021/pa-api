import { Test, TestingModule } from '@nestjs/testing';
import { YtProfileRoleService } from '../yt-profile-role.service';

describe('YtProfileRoleService', () => {
  let service: YtProfileRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtProfileRoleService],
    }).compile();

    service = module.get<YtProfileRoleService>(YtProfileRoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
