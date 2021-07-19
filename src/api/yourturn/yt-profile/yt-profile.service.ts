import { Injectable } from '@nestjs/common';
import { YtCreateProfileDto } from './dto/yt-create-profile.dto';
import { YtUpdateProfileDto } from './dto/yt-update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtProfileRepository } from './yt-profile.repository';
import { YtAccountRepository } from '../yt-account/yt-account.repository';
import { YtRoleRepository } from '../yt-role/yt-role.repository';
import { YtRole } from '../yt-role/entities/yt-role.entity';
import { YtAccount } from '../yt-account/entities/yt-account.entity';


@Injectable()
export class YtProfileService {

  constructor(
    @InjectRepository(YtProfileRepository) private profileRepository: YtProfileRepository,
    @InjectRepository(YtAccountRepository) private accountRepository: YtAccountRepository,
    @InjectRepository(YtRoleRepository) private roleRepository: YtRoleRepository,
  ) {
  }

  async create(createProfileDto: YtCreateProfileDto) {
    const account: YtAccount = await this.accountRepository.findOneOrFail(createProfileDto.account_id);
    const roles: YtRole[] = await this.roleRepository.findByIds(createProfileDto.roles);
    return this.profileRepository.createProfile(createProfileDto, account, roles);
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
