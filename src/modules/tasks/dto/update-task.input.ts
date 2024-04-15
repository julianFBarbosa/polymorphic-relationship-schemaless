import { CreateTaskDto } from './create-task.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTaskInput extends PartialType(CreateTaskDto) {
  id: number;
}
