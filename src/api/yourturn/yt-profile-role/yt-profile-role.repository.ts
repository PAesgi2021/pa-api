import { EntityRepository, Repository } from 'typeorm';
import { YtProfileRole } from './entities/yt-profile-role.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { YtCreateProfileRoleDto } from './dto/create-yt-profile-role.dto';
import { YtProfile } from '../yt-profile/entities/yt-profile.entity';
import { YtRole } from '../yt-role/entities/yt-role.entity';

@EntityRepository(YtProfileRole)
export class YtProfileRoleRepository extends Repository<YtProfileRole> {
  private logger = new Logger('profileRoleRepository');

  async createProfileRole(createProfileRoleDto: YtCreateProfileRoleDto, profile: YtProfile, role: YtRole): Promise<YtProfileRole> {

    const profileRole = new YtProfileRole();
    profileRole.role = role;
    profileRole.profile = profile;

    try {
      await this.save(profileRole);
    } catch (error) {
      this.logger.error('Failed to save this yt-profile-role');
      throw new InternalServerErrorException('Internal Server Error!');
    }

    return profileRole;
  }""
}
