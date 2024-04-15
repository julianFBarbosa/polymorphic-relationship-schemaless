import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreatePatientDto {
  @Field()
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Length(3, 10, { message: 'Nome precisa ter entre 3 e 10 caracteres' })
  name: string;
}
