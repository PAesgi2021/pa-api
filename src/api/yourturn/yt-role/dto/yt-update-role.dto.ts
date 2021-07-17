import { PartialType } from '@nestjs/mapped-types';
import { YtCreateRoleDto } from './yt-create-role.dto';

export class YtUpdateRoleDto extends PartialType(YtCreateRoleDto) {
  role: string;
}
