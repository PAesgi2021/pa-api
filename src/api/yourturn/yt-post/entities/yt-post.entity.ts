import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { YtMessage } from '../../yt-message/entities/yt-message.entity';


@Entity()
export class YtPost extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  isPrivate: boolean;

  @OneToMany(() => YtMessage, message => message.post, {eager: true})
  comments: YtMessage[];

}
