import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateYtPostDto } from './dto/create-yt-post.dto';
import { YtPost } from './entities/yt-post.entity';


@EntityRepository(YtPost)
export class YtPostRepository extends Repository<YtPost> {
  private logger = new Logger('YtPostRepository');

  async createPost(createPostDto: CreateYtPostDto): Promise<YtPost> {
    const post = new YtPost();
    post.title = createPostDto.title;
    post.description = createPostDto.description;
    post.isPrivate = createPostDto.isPrivate;

    try {
      await post.save();
    } catch (error) {
      this.logger.error(`Failed to save a post ${post.title}. DTO : ${JSON.stringify(createPostDto)}`, error.stack);
      throw new InternalServerErrorException('Internal Server Error! Try Again Later');
    }

    return post;
  }
}