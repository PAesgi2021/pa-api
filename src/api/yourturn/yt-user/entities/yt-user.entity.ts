import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class YtUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
