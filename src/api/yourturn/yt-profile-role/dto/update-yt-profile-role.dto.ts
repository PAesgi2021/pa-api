import { PartialType } from '@nestjs/mapped-types';
import { YtCreateProfileRoleDto } from './create-yt-profile-role.dto';

export class YtUpdateProfileRoleDto extends PartialType(YtCreateProfileRoleDto) {
  profile_id: number;
  role_id: number;
}
