import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TaskPerformersService } from './task-performers.service';
import { TaskPerformerEntity } from './entities/task-performer.entity';
import { CreateTaskPerformerDto } from './dto/create-task-performer.dto';
import { PatientsService } from '../patients/patients.service';
import { PatientEntity } from '../patients/entities/patient.entity';

@Resolver(() => TaskPerformerEntity)
export class TaskPerformersResolver {
  constructor(
    private readonly taskPerformersService: TaskPerformersService,
    private readonly patientService: PatientsService,
  ) {}

  @Mutation(() => TaskPerformerEntity)
  createTaskPerformer(@Args('taskPerformer') input: CreateTaskPerformerDto) {
    return this.taskPerformersService.create(input);
  }

  @Query(() => [TaskPerformerEntity])
  findAll() {
    return this.taskPerformersService.findAll();
  }

  @Query(() => [TaskPerformerEntity])
  findPerformersByTaskId(taskId: number) {
    return this.taskPerformersService.findByTaskId(taskId);
  }

  @Mutation(() => TaskPerformerEntity)
  deleteTaskPerformer(@Args('id', { type: () => Int }) id: number) {
    return this.taskPerformersService.delete(id);
  }

  @ResolveField(() => [PatientEntity], {
    nullable: true,
    name: 'patients',
  })
  async getPatients(
    @Parent() taskPerformer: TaskPerformerEntity,
  ): Promise<PatientEntity[]> {
    if (taskPerformer.performerType.toLowerCase() == `patient`) {
      return this.patientService.findPatientsById(taskPerformer.performerId);
    }

    return null;
  }
}
