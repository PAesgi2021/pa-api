import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { Profile } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {
  private logger = new Logger('profileRepository');

  async createProfile(createProfileDto: CreateProfileDto): Promise<Profile> {

    const profile = new Profile();
    profile.pseudo = createProfileDto.pseudo;
    profile.firstName = createProfileDto.firstName;
    profile.lastName = createProfileDto.lastName;
    profile.creationDate = new Date(Date.now());

    try {
      await profile.save();

    } catch (error) {
     this.logger.error('Failed to save this message');
     throw new InternalServerErrorException('Internal Server Error!');
    }
    return profile;
  }
}