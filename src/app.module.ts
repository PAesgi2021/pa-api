import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { TodolistModule } from './todolist/todolist.module';
import { TestController } from './test/test.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TasksModule, AuthModule, TodolistModule],
  controllers: [TestController],
})
export class AppModule {}
