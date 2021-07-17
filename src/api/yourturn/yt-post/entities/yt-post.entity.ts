import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { YtMessage } from '../../yt-message/entities/yt-message.entity';
import { YtProfile } from '../../yt-profile/entities/yt-profile.entity';
import { YtChallenge } from '../../yt-challenge/entities/yt-challenge.entity';


@Entity()
export class YtPost extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  isPrivate: boolean;

  @Column()
  image: string;

  @Column()
  likes: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => YtProfile, object => object.posts, {eager: true})
  profile: YtProfile;

  @ManyToMany(() => YtChallenge, object => object.posts, {eager: false})
  challenge: YtChallenge;

  @OneToMany(() => YtMessage, message => message.post, {eager: true})
  comments: YtMessage[];

}
