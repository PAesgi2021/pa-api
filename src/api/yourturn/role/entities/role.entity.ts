import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProfileRole } from '../../profile-role/entities/profile-role.entity';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @OneToMany(() => ProfileRole, profileRole => profileRole.roleId)
  profileRole: ProfileRole;
}
