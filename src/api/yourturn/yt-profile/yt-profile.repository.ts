import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { YtProfile } from './entities/yt-profile.entity';
import { YtCreateProfileDto } from './dto/yt-create-profile.dto';
import { YtAccount } from '../yt-account/entities/yt-account.entity';
import { YtRole } from '../yt-role/entities/yt-role.entity';

@EntityRepository(YtProfile)
export class YtProfileRepository extends Repository<YtProfile> {
  private logger = new Logger('profileRepository');

  async createProfile(createProfileDto: YtCreateProfileDto, account: YtAccount, roles: YtRole[]): Promise<YtProfile> {

    const profile = new YtProfile();
    profile.pseudo = createProfileDto.pseudo;
    profile.firstName = createProfileDto.firstName;
    profile.lastName = createProfileDto.lastName;
    profile.createdAt = new Date(Date.now());
    profile.updatedAt = new Date(Date.now());
    profile.account = account;
    profile.roles = roles;

    try {
      await profile.save();

    } catch (error) {
     this.logger.error('Failed to save this yt-message');
     throw new InternalServerErrorException('Internal Server Error!');
    }
    return profile;
  }
}