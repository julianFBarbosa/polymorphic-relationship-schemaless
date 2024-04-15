import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PatientsModule } from './modules/patients/patients.module';
import { join } from 'path';
import { TasksModule } from './modules/tasks/tasks.module';
import { TaskPerformersModule } from './modules/task-performers/task-performers.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PatientsModule,
    TasksModule,
    TaskPerformersModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
