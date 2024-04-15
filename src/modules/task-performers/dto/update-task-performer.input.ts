import { CreateTaskPerformerDto } from './create-task-performer.dto';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskPerformerInput extends PartialType(
  CreateTaskPerformerDto,
) {
  @Field(() => Int)
  id: number;
}
