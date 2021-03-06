import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schema/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
  ],
  providers: [CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
