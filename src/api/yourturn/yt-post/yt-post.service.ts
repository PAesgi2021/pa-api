import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { YtCreateYtPostDto } from './dto/create-yt-post.dto';
import { YtUpdateYtPostDto } from './dto/update-yt-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtPostRepository } from './yt-post.repository';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';
import { YtChallengeRepository } from '../yt-challenge/yt-challenge.repository';

@Injectable()
export class YtPostService {

  constructor(
    @InjectRepository(YtPostRepository) private ytPostRepository: YtPostRepository,
    @InjectRepository(YtProfileRepository) private ytProfileRepository: YtProfileRepository,
  @InjectRepository(YtChallengeRepository) private ytChallengeRepository: YtChallengeRepository
  ) {
  }

  async create(createYtPostDto: YtCreateYtPostDto) {
    const profile = await this.ytProfileRepository.findOneOrFail(createYtPostDto.profile_id);
    const challenges = await this.ytChallengeRepository.findByIds(createYtPostDto.challenges_id);
    return this.ytPostRepository.createPost(createYtPostDto, profile, challenges);
  }

  findAll() {
    return this.ytPostRepository.find();
  }

  findOneById(id: number) {
    return this.ytPostRepository.findOneOrFail(id);
  }

  update(id: number, updateYtPostDto: YtUpdateYtPostDto) {
    return this.ytPostRepository.update(id, updateYtPostDto);
  }

  remove(id: number) {
    return this.ytPostRepository.delete(id);
  }
}
