import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './entities/task.entity';
import { TaskPerformerEntity } from '../task-performers/entities/task-performer.entity';

@Resolver(() => TaskEntity)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Mutation(() => TaskEntity)
  createTask(@Args('task') input: CreateTaskDto) {
    return this.tasksService.create(input);
  }

  @Query(() => [TaskEntity])
  findAllTasks() {
    return this.tasksService.findAll();
  }

  @Query(() => TaskEntity, { nullable: true })
  findTaskById(@Args('id') id: number) {
    return this.tasksService.findById(id);
  }

  @Mutation(() => TaskEntity, { nullable: true })
  remove(@Args('id') id: number) {
    return this.tasksService.remove(id);
  }

  @ResolveField(() => [TaskPerformerEntity], {
    nullable: true,
    name: 'performers',
  })
  async getPerformers(
    @Parent() task: TaskEntity,
  ): Promise<TaskPerformerEntity[]> {
    return this.tasksService.getPerformersById(task.id);
  }
}
