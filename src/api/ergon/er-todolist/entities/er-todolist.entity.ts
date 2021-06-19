import {BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ErUser} from "../../er-user/entities/er-user.entity";
import {ErSpace} from "../../er-space/entities/er-space.entity";
import {ErTask} from "../../tasks/task.entity";

@Entity()
export class ErTodolist extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToOne(type => ErSpace, erSpace => erSpace.todolist, {eager: false})
    space: ErSpace;

    @OneToMany(type => ErTask, erTask => erTask.todolist, {eager: true})
    task: ErTask[];

    @Column()
    spaceId: number;


}
