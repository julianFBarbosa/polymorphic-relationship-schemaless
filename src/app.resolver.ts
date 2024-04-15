import { AppService } from './app.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver('App')
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
