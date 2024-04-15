import { Injectable } from '@nestjs/common';
import { TaskPerformerRepository } from './task-performer.repository';
import { TaskPerformerEntity } from './entities/task-performer.entity';
import { CreateTaskPerformerDto } from './dto/create-task-performer.dto';

@Injectable()
export class TaskPerformersService {
  constructor(
    private readonly taskPerformersRepository: TaskPerformerRepository,
  ) {}

  mapToEntity(task: CreateTaskPerformerDto) {
    const entity = new TaskPerformerEntity();
    entity.taskId = task.taskId;
    entity.performerId = task.performerId;
    entity.performerType = task.performerType;

    return entity;
  }

  create(data: CreateTaskPerformerDto) {
    return this.taskPerformersRepository.create(data);
  }

  findAll() {
    return this.taskPerformersRepository.findAll();
  }

  findById(id: number): Promise<TaskPerformerEntity> {
    return this.taskPerformersRepository.findById(id);
  }

  findByTaskId(id: number, type?: string): Promise<TaskPerformerEntity[]> {
    return this.taskPerformersRepository.findMany({
      taskId: id,
      ...(type && { performerType: type }),
    });
  }

  findMany(where: Partial<TaskPerformerEntity>) {
    return this.taskPerformersRepository.findMany(where);
  }

  delete(id: number): Promise<TaskPerformerEntity> {
    return this.taskPerformersRepository.delete(id);
  }
}
