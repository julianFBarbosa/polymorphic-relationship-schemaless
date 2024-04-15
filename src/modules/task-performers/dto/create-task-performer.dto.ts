import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateTaskPerformerDto {
  @Field(() => Int)
  taskId: number;

  @Field(() => Int)
  performerId: number;

  @Field(() => String)
  performerType: string;
}
