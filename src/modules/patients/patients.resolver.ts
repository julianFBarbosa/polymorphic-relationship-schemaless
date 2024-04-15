import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientEntity } from './entities/patient.entity';
import { TaskEntity } from '../tasks/entities/task.entity';

@Resolver(() => PatientEntity)
export class PatientsResolver {
  constructor(private readonly patientsService: PatientsService) {}

  @Mutation(() => PatientEntity)
  createPatient(@Args('patient') createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Query(() => [PatientEntity])
  findAllPatients() {
    return this.patientsService.findAll();
  }

  @Query(() => PatientEntity, { nullable: true })
  findPatientById(@Args('id') id: number): Promise<PatientEntity | null> {
    return this.patientsService.findById(id);
  }

  @Mutation(() => PatientEntity, { nullable: true })
  async deletePatient(@Args('id') id: number) {
    return this.patientsService.remove(id);
  }

  @ResolveField(() => [TaskEntity], { nullable: true, name: 'tasks' })
  getTasks(@Parent() patient: PatientEntity): Promise<TaskEntity[]> {
    console.log('=>(patients.resolver.ts:35) patient', patient);

    return this.patientsService.findTasksByPatientId(patient.id);
  }
}
