import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LineItemInput {
  @Field()
  readonly name: string;
  @Field()
  readonly sku: string;
}
