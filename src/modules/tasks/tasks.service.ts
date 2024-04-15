import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './tasks.repository';
import { TaskEntity } from './entities/task.entity';
import { TaskPerformerEntity } from '../task-performers/entities/task-performer.entity';
import { TaskPerformersService } from '../task-performers/task-performers.service';

@Injectable()
export class TasksService {
  constructor(
    private readonly tasksRepository: TasksRepository,
    private readonly taskPerformersService: TaskPerformersService,
  ) {}

  mapToEntity(task: CreateTaskDto) {
    const entity = new TaskEntity();
    entity.title = task.title;
    entity.description = task.description;

    return entity;
  }

  create(task: CreateTaskDto) {
    return this.tasksRepository.create(task);
  }

  findAll() {
    return this.tasksRepository.findAll();
  }

  findById(id: number) {
    return this.tasksRepository.findById(id);
  }

  remove(id: number) {
    return this.tasksRepository.delete(id);
  }

  async getPerformersById(id: number) {
    const performers: TaskPerformerEntity[] =
      await this.taskPerformersService.findByTaskId(id);

    if (!performers.length) {
      return null;
    }

    return performers;
  }
}
