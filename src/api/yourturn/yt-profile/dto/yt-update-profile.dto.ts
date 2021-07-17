import { PartialType } from '@nestjs/mapped-types';
import { YtCreateProfileDto } from './yt-create-profile.dto';

export class YtUpdateProfileDto extends PartialType(YtCreateProfileDto) {
  pseudo: string;
  firstName: string;
  lastName: string;
}
