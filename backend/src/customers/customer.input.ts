import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CustomerInput {
  @Field()
  readonly name: string;
  @Field()
  readonly firstName: string;
}
