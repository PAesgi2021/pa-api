import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class YtRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  // @ManyToMany(() => YtProfile, profile => profile.roles)
  // profiles: YtProfile[];
}
