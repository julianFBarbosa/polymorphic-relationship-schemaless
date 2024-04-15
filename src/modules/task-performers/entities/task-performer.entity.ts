import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TaskPerformerEntity {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  taskId: number;

  @Field(() => Int)
  performerId: number;

  @Field(() => String)
  performerType: string;
}
