import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { YtAccount } from '../../yt-account/entities/yt-account.entity';
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

  @CreateDateColumn()
  @Column()
  creationDate: Date;

  @ManyToMany(() => YtRole, role => role.profiles)
  roles: YtRole[];

  @ManyToOne(() => YtAccount, account => account.profiles)
  account: YtAccount;

}
