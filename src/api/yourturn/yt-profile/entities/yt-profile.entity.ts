import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { YtAccount } from '../../yt-account/entities/yt-account.entity';

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

  // @ManyToMany(() => YtRole, role => role.profiles, {eager : true})
  // roles: YtRole[];

}
