import {EntityRepository, Repository} from 'typeorm';
import {InternalServerErrorException, Logger} from '@nestjs/common';
import {ErTask} from './task.entity';
import {CreateTaskDto} from './dto/create-task.dto';
import {TaskStatus} from './enum/task-status.enum';
import {GetTasksFilterDto} from './dto/get-tasks-filter.dto';
import {ErUser} from "../er-user/entities/er-user.entity";

@EntityRepository(ErTask)
export class TaskRepository extends Repository<ErTask> {
  private logger = new Logger('TaskRepository');

  async getTasks(filterDto: GetTasksFilterDto, erUser: ErUser): Promise<ErTask[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    query.andWhere('task.userId = :userId', { userId: erUser.id });

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }

    try {
      const tasks = await query.getMany();
      return tasks;
    }
    catch (error) {
      this.logger.error(`Failed to get tasks by user ${erUser.username}. Filters : ${JSON.stringify(filterDto)}`, error.stack);
      throw new InternalServerErrorException('Internal Server Error! Try Again Later');
    }
  }

  async createTask(createTaskDto: CreateTaskDto, erUser: ErUser): Promise<ErTask> {
    const { title, description } = createTaskDto;

    const task = new ErTask();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    //task.user = erUser;

    try {
      await task.save();
    } catch (error) {
      this.logger.error(`Failed to save task by user ${erUser.username}. DTO : ${JSON.stringify(createTaskDto)}`, error.stack);
      throw new InternalServerErrorException('Internal Server Error! Try Again Later');
    }

    //delete task.user;

    return task;
  }
}
