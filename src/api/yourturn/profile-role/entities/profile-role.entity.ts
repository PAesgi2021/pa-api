import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from '../../profile/entities/profile.entity';
import { Role } from '../../role/entities/role.entity';

@Entity()
export class ProfileRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profile, profile => profile.id)
  profileId: number;

  @ManyToOne(() => Role, role => role.id)
  roleId: number;
}
