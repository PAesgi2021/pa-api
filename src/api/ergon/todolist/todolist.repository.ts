import {EntityRepository, Repository} from 'typeorm';
import {Logger} from '@nestjs/common';
import {ErTodolist} from "../er-todolist/entities/er-todolist.entity";

@EntityRepository(ErTodolist)
export class TodolistRepository extends Repository<ErTodolist> {
    private logger = new Logger('TodolistRepository');


}
