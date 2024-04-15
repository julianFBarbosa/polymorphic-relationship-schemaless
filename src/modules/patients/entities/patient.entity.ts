import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TaskEntity } from '../../tasks/entities/task.entity';

@ObjectType()
export class PatientEntity {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [TaskEntity], { nullable: true })
  tasks?: TaskEntity[];
}
