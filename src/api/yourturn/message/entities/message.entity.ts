import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { YtPost } from '../../yt-post/entities/yt-post.entity';

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  //like 

  @CreateDateColumn()
  @Column()
  date: Date;

  @ManyToOne(() => YtPost, post => post.messages)
  post: YtPost;

}


