import { PartialType } from '@nestjs/mapped-types';
import { YtAccountDto } from './yt-account.dto';

export class YtUpdateAccountDto extends PartialType(YtAccountDto) {
  username: string;
  password: string;
}
