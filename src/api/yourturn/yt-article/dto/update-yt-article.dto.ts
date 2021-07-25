import { PartialType } from '@nestjs/mapped-types';
import { CreateYtArticleDto } from './create-yt-article.dto';

export class UpdateYtArticleDto extends PartialType(CreateYtArticleDto) {}
