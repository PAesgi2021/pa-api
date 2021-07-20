import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { YtPost } from '../../yt-post/entities/yt-post.entity';


@Entity()
export class YtChallenge extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToMany(() => YtPost, object => object.challenges)
  @JoinTable()
  posts: YtPost[];
}
