import { PartialType } from '@nestjs/mapped-types';
import { YtCreateYtPostDto } from './create-yt-post.dto';


export class YtUpdateYtPostDto extends PartialType(YtCreateYtPostDto) {
}
