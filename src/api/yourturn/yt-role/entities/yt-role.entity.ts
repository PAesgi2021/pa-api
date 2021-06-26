import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { YtProfile } from '../../yt-profile/entities/yt-profile.entity';

@Entity()
export class YtRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @ManyToMany(() => YtProfile, profile => profile.roles)
  profiles: YtProfile[];
}
