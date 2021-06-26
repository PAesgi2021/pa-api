import { Injectable } from '@nestjs/common';
import { CreateProfileRoleDto } from './dto/create-profile-role.dto';
import { UpdateProfileRoleDto } from './dto/update-profile-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileRoleRepository } from './profile-role.repository';

@Injectable()
export class ProfileRoleService {

  constructor(@InjectRepository(ProfileRoleRepository) private profileRoleRepository: ProfileRoleRepository) { }

  create(createProfileRoleDto: CreateProfileRoleDto) {
    return this.profileRoleRepository.createProfileRole(createProfileRoleDto);
  }

  findAll() {
    return this.profileRoleRepository.find();
  }

  findOne(id: number) {
    return this.profileRoleRepository.findOne(id);
  }

  update(id: number, updateProfileRoleDto: UpdateProfileRoleDto) {
    return this.profileRoleRepository.update(id, updateProfileRoleDto);
  }

  remove(id: number) {
    return this.profileRoleRepository.delete(id);
  }
}
