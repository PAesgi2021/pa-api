import { IsNotEmpty } from 'class-validator';

export class YtCreateMessageDto {
  content: string;

  @IsNotEmpty()
  post_id: number;

  @IsNotEmpty()
  profile_id: number;
}
