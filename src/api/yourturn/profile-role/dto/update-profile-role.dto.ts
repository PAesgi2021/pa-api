import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileRoleDto } from './create-profile-role.dto';

export class UpdateProfileRoleDto extends PartialType(CreateProfileRoleDto) {
  profileId: number;
  roleId: number;
}
