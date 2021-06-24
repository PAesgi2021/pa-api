import { Column, PrimaryGeneratedColumn } from 'typeorm';


export class YtUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
