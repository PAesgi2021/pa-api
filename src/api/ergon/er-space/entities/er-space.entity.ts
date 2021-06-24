import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn, ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {ErUser} from "../../er-user/entities/er-user.entity";
import {ErTodolist} from "../../er-todolist/entities/er-todolist.entity";

@Entity()
export class ErSpace extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne( type => ErUser, erUser => erUser.spaces)
    author: ErUser;

    @Column()
    visibility: string;

    @Column()
    tag: string;

    @Column()
    description: string;

    @Column()
    @UpdateDateColumn()
    lastUpdatedDate: Date;

    @OneToMany(type => ErTodolist, erTodolist => erTodolist.space, {eager: true})
    todolists: ErTodolist[];

    @Column()
    userId: number;


}
