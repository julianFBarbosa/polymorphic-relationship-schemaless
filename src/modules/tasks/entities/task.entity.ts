import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TaskPerformerEntity } from '../../task-performers/entities/task-performer.entity';

@ObjectType()
export class TaskEntity {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [TaskPerformerEntity], { nullable: true })
  performers?: TaskPerformerEntity[];
}
