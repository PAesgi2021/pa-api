import { PartialType } from '@nestjs/mapped-types';
import { CreateYtPostDto } from './create-yt-post.dto';


export class UpdateYtPostDto extends PartialType(CreateYtPostDto) {
  title: string;
  description: string;
  isPrivate: boolean;
}
