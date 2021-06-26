import { PartialType } from '@nestjs/mapped-types';
import { YtCreateAccountDto } from './yt-create-account.dto';

export class YtUpdateAccountDto extends PartialType(YtCreateAccountDto) {
  username: string;
  password: string;
}
