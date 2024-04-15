import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class CreateTaskDto {
  @Field()
  title: string;

  @Field()
  @IsOptional()
  description?: string;
}
