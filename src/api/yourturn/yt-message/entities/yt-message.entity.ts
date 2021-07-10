import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { YtPost } from '../../yt-post/entities/yt-post.entity';

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

  @ManyToOne(() => YtPost, post => post.comments)
  post: YtPost;

}


