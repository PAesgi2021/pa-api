import { Injectable } from '@nestjs/common';
import { YtCreateRoleDto } from './dto/yt-create-role.dto';
import { YtUpdateRoleDto } from './dto/yt-update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtRoleRepository } from './yt-role.repository';
import { YtProfile } from '../yt-profile/entities/yt-profile.entity';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';

@Injectable()
export class YtRoleService {

  constructor(
    @InjectRepository(YtRoleRepository) private roleRepository: YtRoleRepository,
  ) { }

  async create(createRoleDto: YtCreateRoleDto) {
    return this.roleRepository.createRole(createRoleDto);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOne(id);
  }

  update(id: number, updateRoleDto: YtUpdateRoleDto) {
    return this.roleRepository.update(id, updateRoleDto);
  }

  remove(id: number) {
    return this.roleRepository.delete(id);
  }
}
