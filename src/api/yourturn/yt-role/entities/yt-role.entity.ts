import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { YtProfileRole } from '../../yt-profile-role/entities/yt-profile-role.entity';

@Entity()
export class YtRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @OneToMany(() => YtProfileRole, profileRole => profileRole.role)
  profileRoles: YtProfileRole[];


  // @ManyToMany(() => YtProfile, profile => profile.roles)
  // profiles: YtProfile[];
}
