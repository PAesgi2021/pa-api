import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";

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

    //@Column()
    //salt: string;

    //@OneToMany(type => ErSpace, space => space.user, { eager: true })
    //space: ErSpace[];

    //@OneToMany(type => ErTask, erTask => erTask.user, { eager: true })
    //task: ErTask[];


    //async validatePassword(password: string): Promise<boolean> {
   //     const hash = await bcrypt.hash(password, this.salt);
    //    return hash === this.password;
   // }
}
