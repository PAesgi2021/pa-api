import { Injectable } from '@nestjs/common';
import { YtCreateYtPostDto } from './dto/create-yt-post.dto';
import { YtUpdateYtPostDto } from './dto/update-yt-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtPostRepository } from './yt-post.repository';
import { YtProfileRepository } from '../yt-profile/yt-profile.repository';
import { YtChallengeRepository } from '../yt-challenge/yt-challenge.repository';
import { getRepository } from 'typeorm';
import { YtPost } from './entities/yt-post.entity';
import { YtProfile } from '../yt-profile/entities/yt-profile.entity';
import { YtChallenge } from '../yt-challenge/entities/yt-challenge.entity';

@Injectable()
export class YtPostService {
  constructor(
    @InjectRepository(YtPostRepository, 'angular')
    private ytPostRepository: YtPostRepository,
    @InjectRepository(YtProfileRepository, 'angular')
    private ytProfileRepository: YtProfileRepository,
    @InjectRepository(YtChallengeRepository, 'angular')
    private ytChallengeRepository: YtChallengeRepository,
  ) {}

  async create(createYtPostDto: YtCreateYtPostDto) {
    const profile = await getRepository(YtProfile, 'angular').findOneOrFail(
      createYtPostDto.profile_id,
    );
    const challenges = await getRepository(YtChallenge, 'angular').findByIds(
      createYtPostDto.challenges_id,
    );
    return this.ytPostRepository.createPost(
      createYtPostDto,
      profile,
      challenges,
    );
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

  async like(id: number): Promise<YtPost> {
    const post = await this.ytPostRepository.findOne(id);
    post.likes++;
    post.profile.ecoPoint++;
    await post.profile.save();
    return post.save();
  }

  async unlike(id: number): Promise<YtPost> {
    const post = await this.ytPostRepository.findOne(id);
    post.likes--;
    post.profile.ecoPoint--;
    await post.profile.save();
    return post.save();
  }
}
