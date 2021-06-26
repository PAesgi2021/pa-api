import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../../message/entities/message.entity';


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

  @OneToMany(() => Message, message => message.post, {eager: true})
  comments: Message[];

}
