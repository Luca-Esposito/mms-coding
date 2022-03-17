import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schema/order.schema';
import { CustomersModule } from '../customers/customers.module';
import { EmployeesModule } from '../employees/employees.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    CustomersModule,
    EmployeesModule,
  ],
  providers: [OrdersService, OrdersResolver],
})
export class OrdersModule {}
