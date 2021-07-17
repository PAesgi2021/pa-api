import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { YtProfile } from '../../yt-profile/entities/yt-profile.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class YtAccount extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(() => YtProfile, profile => profile.account, {eager: true})
  profiles: YtProfile[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

}
