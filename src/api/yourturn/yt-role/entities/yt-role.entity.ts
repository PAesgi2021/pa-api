import {
  BaseEntity,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { YtProfile } from '../../yt-profile/entities/yt-profile.entity';

@Entity()
export class YtRole extends BaseEntity {
  @PrimaryColumn()
  name: string;

  @ManyToMany(
    () => YtProfile,
    object => object.roles,
  )
  @JoinTable()
  profiles: YtProfile[];
}
