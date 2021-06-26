import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Account } from '../../account/entities/account.entity';
import { ProfileRole } from '../../profile-role/entities/profile-role.entity';

@Entity()
export class Profile extends BaseEntity {
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

  @OneToMany(() => ProfileRole, profileRole => profileRole.id)
  profileRole: ProfileRole;

  @ManyToOne(() => Account, account => account.id)
  account: Account;

}
