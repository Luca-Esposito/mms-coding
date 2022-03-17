import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsDate, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { OrderStates } from '../schema/order.schema';

@ObjectType()
export class StateHistoryType {
  @Field(() => ID)
  @IsString()
  readonly _id?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsIn([OrderStates[0], OrderStates[1], OrderStates[2]])
  state: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  employeeId?: string;

  @Field()
  @IsDate()
  readonly updatedAt?: number;
}
