import {
  BaseEntity,
  Column,
  Entity, ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { YtAccount } from '../../yt-account/entities/yt-account.entity';
import { YtPost } from '../../yt-post/entities/yt-post.entity';
import { YtMessage } from '../../yt-message/entities/yt-message.entity';
import { YtRole } from '../../yt-role/entities/yt-role.entity';


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

  @Column()
  ecoPoint: number;

  @Column({default: true})
  status: boolean;

  @ManyToOne(() => YtAccount, account => account.profiles)
  account: YtAccount;

  @OneToMany(() => YtPost, object => object.profile)
  posts: YtPost[];

  @OneToMany(() => YtMessage, object => object.profile)
  messages: YtMessage[];

  @ManyToMany(() => YtRole, object => object.profiles, { eager: true })
  roles: YtRole[];
}
