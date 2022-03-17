import { Field, InputType } from '@nestjs/graphql';
import { CustomerInput } from '../customers/customer.input';
import { LineItemInput } from '../line-items/line-item.input';
import { OrderStates } from './schema/order.schema';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class OrderInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @IsIn([OrderStates[0], OrderStates[1], OrderStates[2]])
  currentState: string;
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  readonly employeeId?: string;
}

@InputType()
export class OrderInputCreate {
  @Field()
  @IsNotEmpty()
  @IsString()
  @IsIn([OrderStates[0], OrderStates[1], OrderStates[2]])
  currentState: string = OrderStates[0];
  @Field()
  @IsNotEmpty()
  readonly customer: CustomerInput;
  @Field((type) => [LineItemInput])
  @IsNotEmpty()
  readonly lineItems: LineItemInput[];
}
