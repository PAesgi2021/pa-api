import { PartialType } from '@nestjs/mapped-types';
import { CreateErUserDto } from './create-er-user.dto';

export class UpdateErUserDto extends PartialType(CreateErUserDto) {}
