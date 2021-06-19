import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import {ErTask} from "../../tasks/task.entity";
import {ErSpace} from "../../er-space/entities/er-space.entity";

const bcrypt = require('bcrypt');

@Entity()
@Unique(['username'])
export class ErUser extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @OneToMany(type => ErSpace, space => space.user, { eager: true })
    space: ErSpace[];

    @OneToMany(type => ErTask, erTask => erTask.user, { eager: true })
    task: ErTask[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}
