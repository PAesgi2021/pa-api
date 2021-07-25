import { PartialType } from '@nestjs/mapped-types';
import { CreateYtChallengeDto } from './create-yt-challenge.dto';

export class UpdateYtChallengeDto extends PartialType(CreateYtChallengeDto) {}
