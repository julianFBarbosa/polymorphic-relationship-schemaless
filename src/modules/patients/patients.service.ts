import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientsRepository } from './patients.repository';
import { PatientEntity } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  mapToDto(dto: CreatePatientDto): PatientEntity {
    const entity = new PatientEntity();
    console.log('=>(patients.service.ts:12) mapToDto entity', entity);
    entity.name = dto.name;

    return entity;
  }

  async create(input: CreatePatientDto) {
    const entity = this.mapToDto(input);
    return this.patientsRepository.create(entity);
  }

  async findAll() {
    return this.patientsRepository.findAll();
  }

  async findMany(where: Partial<PatientEntity>) {
    return this.patientsRepository.findMany(where);
  }

  async findPatientsById(id: number): Promise<PatientEntity[]> {
    return this.patientsRepository.findManyById(id);
  }

  async findTasksByPatientId(id: number) {
    const tasks = await this.patientsRepository.findTasksByPatientId(id);
    console.log('=>(patients.service.ts:37) tasks', tasks);

    return tasks;
  }

  async findById(id: number): Promise<PatientEntity> {
    return this.patientsRepository.findById(id);
  }

  remove(id: number) {
    return this.patientsRepository.delete(id);
  }
}
