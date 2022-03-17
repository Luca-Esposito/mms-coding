import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeInput {
  @Field()
  readonly name: string;
  @Field()
  readonly firstName: string;
}
