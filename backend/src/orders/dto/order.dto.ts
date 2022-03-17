import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  IsDate,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CustomerType } from '../../customers/dto/customer.dto';
import { LineItemType } from '../../line-items/dto/lineItem.dto';
import { EmployeeType } from '../../employees/dto/employee.dto';
import { OrderStates } from '../schema/order.schema';
import { StateHistoryType } from './stateHistory.dto';

@ObjectType()
export class OrderType {
  @Field(() => ID)
  @IsString()
  readonly _id?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsIn([OrderStates[0], OrderStates[1], OrderStates[2]])
  currentState: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  customerId: string;

  @Field()
  @IsNotEmpty()
  customer?: CustomerType;

  @Field((type) => [LineItemType])
  @IsNotEmpty()
  readonly lineItems: LineItemType[];

  @Field()
  @IsNotEmpty()
  @IsString()
  employeeId?: string;

  @Field({ nullable: true })
  @IsOptional()
  employee?: EmployeeType | null;

  @Field()
  @IsDate()
  readonly createdAt: number;

  @Field()
  @IsDate()
  readonly updatedAt?: number;

  @Field((type) => [StateHistoryType], { nullable: true })
  stateHistory?: StateHistoryType[];
}
