import { Module } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodolistController } from './todolist.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TaskRepository} from "../tasks/task.repository";
import {AuthModule} from "../../../auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository]),
    AuthModule,
  ],
  controllers: [TodolistController],
  providers: [TodolistService]
})
export class TodolistModule {}
