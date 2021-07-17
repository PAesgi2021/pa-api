import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { YtCreateYtPostDto } from './dto/create-yt-post.dto';
import { YtPost } from './entities/yt-post.entity';
import { YtProfile } from '../yt-profile/entities/yt-profile.entity';


@EntityRepository(YtPost)
export class YtPostRepository extends Repository<YtPost> {
  private logger = new Logger('YtPostRepository');

  async createPost(createPostDto: YtCreateYtPostDto, profile: YtProfile): Promise<YtPost> {
    const post = new YtPost();
    post.description = createPostDto.description;
    post.isPrivate = createPostDto.isPrivate;
    post.likes = 0;
    post.createdAt = new Date(Date.now());
    post.updatedAt = new Date(Date.now());
    post.profile = profile;

    if (createPostDto.image)
      post.image = createPostDto.image;
    else
      post.image = "";

    try {
      await post.save();
    } catch (error) {
      this.logger.error(`Failed to save a post ${post}. DTO : ${JSON.stringify(createPostDto)}`, error.stack);
      throw new InternalServerErrorException('Internal Server Error! Try Again Later');
    }

    return post;
  }
}