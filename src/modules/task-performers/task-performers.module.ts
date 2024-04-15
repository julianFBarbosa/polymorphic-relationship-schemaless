import { Module } from '@nestjs/common';
import { TaskPerformersService } from './task-performers.service';
import { TaskPerformersResolver } from './task-performers.resolver';
import { TaskPerformerRepository } from './task-performer.repository';
import { PrismaModule } from '../../../prisma/prisma.module';
import { PatientsService } from '../patients/patients.service';
import { PatientsRepository } from '../patients/patients.repository';

@Module({
  providers: [
    TaskPerformersResolver,
    TaskPerformersService,
    PatientsService,
    PatientsRepository,
    TaskPerformerRepository,
  ],
  imports: [PrismaModule],
})
export class TaskPerformersModule {}
