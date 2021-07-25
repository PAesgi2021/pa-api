import { YtRole } from '../../yt-role/entities/yt-role.entity';

export class YtUpdateProfileDto {
  pseudo?: string;
  firstName?: string;
  lastName?: string;
  account_id?: number;
  roles?: YtRole[];
}
