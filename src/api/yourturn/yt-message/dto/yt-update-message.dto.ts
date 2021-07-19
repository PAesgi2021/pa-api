import { PartialType } from '@nestjs/mapped-types';
import { YtCreateMessageDto } from './yt-create-message.dto';

export class YtUpdateMessageDto extends PartialType(YtCreateMessageDto) {}
