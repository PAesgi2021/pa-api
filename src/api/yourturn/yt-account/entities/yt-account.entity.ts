import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { YtProfile } from '../../yt-profile/entities/yt-profile.entity';

@Entity()
export class YtAccount extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => YtProfile, profile => profile.account, {eager: true})
  profiles: YtProfile[];

}
