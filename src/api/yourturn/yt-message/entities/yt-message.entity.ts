import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { YtPost } from '../../yt-post/entities/yt-post.entity';
import { YtProfile } from '../../yt-profile/entities/yt-profile.entity';

@Entity()
export class YtMessage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createAt: Date;

  @Column()
  likes: number;

  @ManyToOne(() => YtProfile, object => object.messages, {eager: true})
  profile: YtProfile;

  @ManyToOne(() => YtPost, post => post.comments)
  post: YtPost;

}


