import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class CustomerType {
  @Field(() => ID)
  @IsString()
  readonly _id?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;
}
