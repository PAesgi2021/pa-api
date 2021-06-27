import { Injectable } from '@nestjs/common';
import { YtCreateProfileDto } from './dto/yt-create-profile.dto';
import { YtUpdateProfileDto } from './dto/yt-update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtProfileRepository } from './yt-profile.repository';
import { YtAccountRepository } from '../yt-account/yt-account.repository';

@Injectable()
export class YtProfileService {

  constructor(
    @InjectRepository(YtProfileRepository) private profileRepository: YtProfileRepository,
    @InjectRepository(YtAccountRepository) private accountRepository: YtAccountRepository
  ) { }

  async create(createProfileDto: YtCreateProfileDto) {
    const account = await this.accountRepository.findOneOrFail(createProfileDto.account_id);
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
