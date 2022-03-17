import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesService } from './employees.service';
import { EmployeeSchema } from './schema/employee.schema';
import { EmployeesResolver } from './employees.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  providers: [EmployeesService, EmployeesResolver],
  exports: [EmployeesService],
})
export class EmployeesModule {}
