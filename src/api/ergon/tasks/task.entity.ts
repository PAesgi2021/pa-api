import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TaskStatus } from './enum/task-status.enum';
import { User } from '../../../auth/user.entity';
import {ErUser} from "../er-user/entities/er-user.entity";
import {ErTodolist} from "../er-todolist/entities/er-todolist.entity";

@Entity()
export class ErTask extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne(type => ErUser, erUser => erUser.task, { eager: false })
  user: ErUser;

  @ManyToOne(type => ErTodolist, erTodolist => erTodolist.task, { eager: false })
  todolist: ErTodolist;

  @Column()
  userId: number;
}
