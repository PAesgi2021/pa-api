import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { YtAccount } from '../../yt-account/entities/yt-account.entity';
import { YtProfileRole } from '../../yt-profile-role/entities/yt-profile-role.entity';

@Entity()
export class YtProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pseudo: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn()
  @Column()
  creationDate: Date;

  @ManyToOne(() => YtAccount, account => account.profiles)
  account: YtAccount;

  @OneToMany(() => YtProfileRole, profileRole => profileRole.profile, {eager: true})
  profileRoles: YtProfileRole[];

  // @ManyToMany(() => YtRole, role => role.profiles, {eager : true})
  // roles: YtRole[];

}
