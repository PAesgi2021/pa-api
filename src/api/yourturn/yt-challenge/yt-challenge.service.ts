import { Injectable } from '@nestjs/common';
import { CreateYtChallengeDto } from './dto/create-yt-challenge.dto';
import { UpdateYtChallengeDto } from './dto/update-yt-challenge.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtChallengeRepository } from './yt-challenge.repository';

@Injectable()
export class YtChallengeService {

  constructor(
    @InjectRepository(YtChallengeRepository,'angular') private challengeRepository: YtChallengeRepository,
  ) {
  }

  create(createYtChallengeDto: CreateYtChallengeDto) {
    return this.challengeRepository.createChallenge(createYtChallengeDto);
  }

  findAll() {
    return this.challengeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ytChallenge`;
  }

  update(id: number, updateYtChallengeDto: UpdateYtChallengeDto) {
    return `This action updates a #${id} ytChallenge`;
  }

  remove(id: number) {
    return this.challengeRepository.delete(id);
  }
}
