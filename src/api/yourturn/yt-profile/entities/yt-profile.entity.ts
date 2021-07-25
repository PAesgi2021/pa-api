import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { YtAccount } from '../../yt-account/entities/yt-account.entity';
import { YtProfileRole } from '../../yt-profile-role/entities/yt-profile-role.entity';
import { YtPost } from '../../yt-post/entities/yt-post.entity';
import { YtMessage } from '../../yt-message/entities/yt-message.entity';

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

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => YtAccount, account => account.profiles)
  account: YtAccount;

  @OneToMany(() => YtProfileRole, profileRole => profileRole.profile, {eager: true})
  profileRoles: YtProfileRole[];

  @OneToMany(() => YtPost, object => object.profile)
  posts: YtPost[];

  @OneToMany(() => YtMessage, object => object.profile)
  messages: YtMessage[];

}
