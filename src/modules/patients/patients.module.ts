import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsResolver } from './patients.resolver';
import { PatientsRepository } from './patients.repository';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [PatientsResolver, PatientsService, PatientsRepository],
  imports: [PrismaModule],
  controllers: [],
  exports: [],
})
export class PatientsModule {}
