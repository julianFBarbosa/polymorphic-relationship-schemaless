import { Injectable } from '@nestjs/common';
import { GenericRepository } from '../../common/generic.repository';
import { PrismaService } from '../../../prisma/prisma.service';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksRepository implements GenericRepository {
  constructor(private readonly orm: PrismaService) {}

  create(data: CreateTaskDto): Promise<TaskEntity> {
    return this.orm.task.create({ data });
  }

  findAll(): Promise<TaskEntity[]> {
    return this.orm.task.findMany();
  }

  findById(id: number): Promise<TaskEntity> {
    return this.orm.task.findFirst({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<any> {
    return this.orm.task.delete({
      where: {
        id,
      },
    });
  }
}
