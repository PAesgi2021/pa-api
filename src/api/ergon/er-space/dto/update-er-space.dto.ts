import { PartialType } from '@nestjs/mapped-types';
import { CreateErSpaceDto } from './create-er-space.dto';

export class UpdateErSpaceDto extends PartialType(CreateErSpaceDto) {}
