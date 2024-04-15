import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { TasksRepository } from './tasks.repository';
import { PrismaModule } from '../../../prisma/prisma.module';
import { TaskPerformersService } from '../task-performers/task-performers.service';
import { TaskPerformerRepository } from '../task-performers/task-performer.repository';

@Module({
  providers: [
    TasksResolver,
    TasksService,
    TasksRepository,
    TaskPerformersService,
    TaskPerformerRepository,
  ],
  imports: [PrismaModule],
})
export class TasksModule {}
