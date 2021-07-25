import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateYtChallengeDto } from './dto/create-yt-challenge.dto';
import { YtChallenge } from './entities/yt-challenge.entity';


@EntityRepository(YtChallenge)
export class YtChallengeRepository extends Repository<YtChallenge> {
  private logger = new Logger('YtChallengeRepository');

  async createChallenge(dto: CreateYtChallengeDto): Promise<YtChallenge> {
    const challenge = new YtChallenge();
    challenge.tag = dto.tag;
    challenge.description = dto.description;

    (dto.image)
      ? challenge.image = dto.image
      : challenge.image = '';

    try {
      await this.save(challenge);
    } catch (error) {
      this.logger.error(`Failed to save a post ${challenge}. DTO : ${JSON.stringify(dto)}`, error.stack);
      throw new InternalServerErrorException('Internal Server Error! Try Again Later');
    }

    return challenge;
  }
}
