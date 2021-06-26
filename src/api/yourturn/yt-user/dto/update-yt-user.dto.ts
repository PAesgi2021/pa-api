import { PartialType } from '@nestjs/mapped-types';
import { CreateYtUserDto } from './create-yt-user.dto';

export class UpdateYtUserDto extends PartialType(CreateYtUserDto) {}
