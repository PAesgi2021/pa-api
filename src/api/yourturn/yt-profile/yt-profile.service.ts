import { Injectable } from '@nestjs/common';
import { YtCreateProfileDto } from './dto/yt-create-profile.dto';
import { YtUpdateProfileDto } from './dto/yt-update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtProfileRepository } from './yt-profile.repository';
import { YtAccountRepository } from '../yt-account/yt-account.repository';
import {YtRoleRepository} from "../yt-role/yt-role.repository";
import {getRepository} from "typeorm";
import {YtPost} from "../yt-post/entities/yt-post.entity";
import {YtAccount} from "../yt-account/entities/yt-account.entity";
import { YtRoleRepository } from '../yt-role/yt-role.repository';
import { YtRole } from '../yt-role/entities/yt-role.entity';
import { YtAccount } from '../yt-account/entities/yt-account.entity';


@Injectable()
export class YtProfileService {

  constructor(
    @InjectRepository(YtProfileRepository,'angular') private profileRepository: YtProfileRepository,
    @InjectRepository(YtAccountRepository,'angular') private accountRepository: YtAccountRepository
    @InjectRepository(YtRoleRepository,'angular') private roleRepository: YtRoleRepository,
  ) { }

  async create(createProfileDto: YtCreateProfileDto) {
    const account = await getRepository(YtAccount,'angular').findOneOrFail(createProfileDto.account_id);
    const roles: YtRole[] = await getRepository(YtRole,'angular').findByIds(createProfileDto.roles);
    return this.profileRepository.createProfile(createProfileDto, account);
    
  }

  findAll() {
    return this.profileRepository.find();
  }

  findOne(id: number) {
    return this.profileRepository.findOneOrFail(id);
  }

  update(id: number, updateProfileDto: YtUpdateProfileDto) {
    return this.profileRepository.update(id, updateProfileDto);
  }

  remove(id: number) {
    return this.profileRepository.delete(id);
  }
}
