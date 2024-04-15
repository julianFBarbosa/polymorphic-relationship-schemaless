import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { GenericRepository } from '../../common/generic.repository';
import { CreateTaskPerformerDto } from './dto/create-task-performer.dto';
import { TaskPerformerEntity } from './entities/task-performer.entity';

@Injectable()
export class TaskPerformerRepository implements GenericRepository {
  constructor(private readonly orm: PrismaService) {}

  create(data: CreateTaskPerformerDto) {
    // @ts-ignore
    return this.orm.taskPerformers.create({ data: data });
  }

  findAll() {
    return this.orm.taskPerformers.findMany();
  }

  findById(id: number): Promise<any> {
    return this.orm.taskPerformers.findFirst({
      where: {
        id,
      },
    });
  }

  findMany(
    where: Partial<TaskPerformerEntity>,
  ): Promise<TaskPerformerEntity[]> {
    return this.orm.taskPerformers.findMany({
      where: { ...where },
    });
  }

  delete(id: number): any {
    return this.orm.taskPerformers.delete({
      where: {
        id,
      },
    });
  }
}
