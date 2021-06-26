import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from '../../profile/entities/profile.entity';

@Entity()
export class Account extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Profile, profile => profile.id)
  profile: Profile;

}
