import { Injectable } from '@nestjs/common';
import { GenericRepository } from '../../common/generic.repository';
import { PatientEntity } from './entities/patient.entity';
import { PrismaService } from '../../../prisma/prisma.service';
import { TaskEntity } from '../tasks/entities/task.entity';

@Injectable()
export class PatientsRepository implements GenericRepository {
  constructor(private readonly orm: PrismaService) {}

  create(data: PatientEntity): Promise<PatientEntity> {
    return this.orm.patient.create({ data });
  }

  findAll(): Promise<PatientEntity[]> {
    return this.orm.patient.findMany();
  }

  findMany(where: Partial<PatientEntity>): Promise<PatientEntity[]> {
    return this.orm.patient.findMany({
      where: { ...where },
    });
  }

  findById(id: number): Promise<PatientEntity> {
    return this.orm.patient.findFirst({
      where: {
        id,
      },
    });
  }

  findManyById(id: number): Promise<PatientEntity[]> {
    return this.orm.patient.findMany({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<any> {
    return this.orm.patient.delete({
      where: {
        id,
      },
    });
  }

  findTasksByPatientId(id: number): Promise<TaskEntity[]> {
    return this.orm.task.findMany({
      where: {
        TaskPerformer: {
          some: {
            performerId: id,
            performerType: `patient`,
          },
        },
      },
    });
  }
}
