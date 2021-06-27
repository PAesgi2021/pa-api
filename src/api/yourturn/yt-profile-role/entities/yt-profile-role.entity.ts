import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { YtProfile } from '../../yt-profile/entities/yt-profile.entity';
import { YtRole } from '../../yt-role/entities/yt-role.entity';

@Entity()
export class YtProfileRole extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(() => YtProfile, profile => profile.profileRoles)
  profile: YtProfile;

  @ManyToOne(() => YtRole, role => role.profileRoles, {eager: true})
  role: YtRole;

}
