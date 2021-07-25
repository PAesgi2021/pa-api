import { Injectable } from '@nestjs/common';
import { YtCreateProfileRoleDto } from './dto/create-yt-profile-role.dto';
import { YtUpdateProfileRoleDto } from './dto/update-yt-profile-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtProfileRoleRepository } from './yt-profile-role.repository';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';
import { YtRoleRepository } from '../yt-role/yt-role.repository';

@Injectable()
export class YtProfileRoleService {

  constructor(
    @InjectRepository(YtProfileRoleRepository) private profileRoleRepository: YtProfileRoleRepository,
    @InjectRepository(YtRoleRepository) private roleRepository: YtRoleRepository,
    @InjectRepository(YtProfileRepository) private profileRepository: YtProfileRepository,
    ) { }

  async create(createProfileRoleDto: YtCreateProfileRoleDto) {
    const profile = await this.profileRepository.findOneOrFail(createProfileRoleDto.profile_id);
    const role = await this.roleRepository.findOneOrFail(createProfileRoleDto.role_id);
    return this.profileRoleRepository.createProfileRole(createProfileRoleDto, profile, role);
  }

  findAll() {
    return this.profileRoleRepository.find();
  }

  findOne(id: number) {
    return this.profileRoleRepository.findOne(id);
  }

  // update(id: number, updateProfileRoleDto:  YtUpdateProfileRoleDto) {
  //   return this.profileRoleRepository.update(id, updateProfileRoleDto);// Changer pour update
  // }

  remove(id: number) {
    return this.profileRoleRepository.delete(id);
  }
}
