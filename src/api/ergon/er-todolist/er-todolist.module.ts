import { Module } from '@nestjs/common';
import { ErTodolistService } from './er-todolist.service';
import { ErTodolistController } from './er-todolist.controller';

@Module({
  controllers: [ErTodolistController],
  providers: [ErTodolistService]
})
export class ErTodolistModule {}
