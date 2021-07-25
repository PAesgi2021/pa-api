import { Injectable } from '@nestjs/common';
import { YtCreateProfileRoleDto } from './dto/create-yt-profile-role.dto';
import { YtUpdateProfileRoleDto } from './dto/update-yt-profile-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtProfileRoleRepository } from './yt-profile-role.repository';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';
import { YtRoleRepository } from '../yt-role/yt-role.repository';
import {getRepository} from "typeorm";
import {YtPost} from "../yt-post/entities/yt-post.entity";
import {YtProfile} from "../yt-profile/entities/yt-profile.entity";
import {YtRole} from "../yt-role/entities/yt-role.entity";

@Injectable()
export class YtProfileRoleService {

  constructor(
    @InjectRepository(YtProfileRoleRepository,'angular') private profileRoleRepository: YtProfileRoleRepository,
    @InjectRepository(YtRoleRepository,'angular') private roleRepository: YtRoleRepository,
    @InjectRepository(YtProfileRepository,'angular') private profileRepository: YtProfileRepository,
    ) { }

  async create(createProfileRoleDto: YtCreateProfileRoleDto) {
    const profile = await getRepository(YtProfile,'angular').findOneOrFail(createProfileRoleDto.profile_id);
    const role = await getRepository(YtRole,'angular').findOneOrFail(createProfileRoleDto.role_id);
    return this.profileRoleRepository.createProfileRole(createProfileRoleDto, profile, role);
  }

  findAll() {
    return this.profileRoleRepository.find();
  }

  findOne(id: number) {
    return this.profileRoleRepository.findOne(id);
  }

  remove(id: number) {
    return this.profileRoleRepository.delete(id);
  }
}
