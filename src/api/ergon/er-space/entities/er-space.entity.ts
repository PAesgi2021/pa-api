import {BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {ErUser} from "../../er-user/entities/er-user.entity";
import {ErTodolist} from "../../er-todolist/entities/er-todolist.entity";

@Entity()
export class ErSpace extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

   // @OneToOne(type => ErUser, erUser => erUser.space, {eager: false})
   // author: ErUser;

    @Column()
    visibility: string;

    @Column()
    tag: string;

    @Column()
    description: string;

    @Column()
    @UpdateDateColumn()
    lastUpdatedDate: Date;

   // @OneToMany(type => ErUser, erUser => erUser.space, {eager: false})
   // user: ErUser[];

    @OneToMany(type => ErTodolist, erTodolist => erTodolist.space, {eager: true})
    todolist: ErTodolist[];

    @Column()
    userId: number;


}
