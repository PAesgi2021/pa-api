import { Test, TestingModule } from '@nestjs/testing';
import { ProfileRoleController } from '../profile-role.controller';
import { ProfileRoleService } from '../profile-role.service';

describe('ProfileRoleController', () => {
  let controller: ProfileRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileRoleController],
      providers: [ProfileRoleService],
    }).compile();

    controller = module.get<ProfileRoleController>(ProfileRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
