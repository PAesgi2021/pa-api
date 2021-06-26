import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(ProfileRepository) private profileRepository: ProfileRepository) { }

  create(createProfileDto: CreateProfileDto) {
    return this.profileRepository.createProfile(createProfileDto);
  }

  findAll() {
    return this.profileRepository.find();
  }

  findOne(id: number) {
    return this.profileRepository.findOneOrFail(id);
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profileRepository.update(id, updateProfileDto);
  }

  remove(id: number) {
    return this.profileRepository.delete(id);
  }
}
