import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {GetTasksFilterDto} from './dto/get-tasks-filter.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {TaskRepository} from './task.repository';
import {ErTask} from './task.entity';
import {TaskStatus} from './enum/task-status.enum';
import {ErUser} from "../er-user/entities/er-user.entity";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) { }

  getTasks(filterDto: GetTasksFilterDto, erUser: ErUser): Promise<ErTask[]> {
    return this.taskRepository.getTasks(filterDto, erUser);
  }

  async getTaskById(id: number, erUser: ErUser): Promise<ErTask> {
    const requiredTask = await this.taskRepository.findOne({ where: { id, userId: erUser.id } });
    if (!requiredTask) {
      throw new NotFoundException(`Task with ${id} not found.`);
    }
    return requiredTask;
  }

  async deleteTask(id: number, erUser: ErUser): Promise<void> {
    const result = await this.taskRepository.delete({ id, userId: erUser.id });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }

  async createTask(createTaskDto: CreateTaskDto, erUser: ErUser): Promise<ErTask> {
    return this.taskRepository.createTask(createTaskDto, erUser);
  }

  async updateTaskStatus(id: number, status: TaskStatus, erUser: ErUser): Promise<ErTask> {
    const task = await this.getTaskById(id, erUser);
    task.status = status;
    await task.save();
    return task;
  }
}
