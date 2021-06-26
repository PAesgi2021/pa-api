import { EntityRepository, Repository } from 'typeorm';
import { ProfileRole } from './entities/profile-role.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateProfileRoleDto } from './dto/create-profile-role.dto';

@EntityRepository(ProfileRole)
export class ProfileRoleRepository extends Repository<ProfileRole> {
  private logger = new Logger('profileRoleRepository');

  async createProfileRole(createProfileRoleDto: CreateProfileRoleDto): Promise<ProfileRole> {

    const profileRole = new ProfileRole();
    profileRole.profileId = createProfileRoleDto.profileId;
    profileRole.roleId = createProfileRoleDto.roleId;

    try {
      await profileRole.save();
    } catch (error) {
      this.logger.error('Failed to save this message');
      throw new InternalServerErrorException('Internal Server Error!');
    }
    return profileRole;
  }

}