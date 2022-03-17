import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Employee } from './interface/employee.interface';
import { CustomerInput } from '../customers/customer.input';
import { EmployeeType } from './dto/employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employee') private employeeModel: Model<Employee>,
  ) {}

  async create(createEmployeeDto: CustomerInput): Promise<EmployeeType> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    return await createdEmployee.save();
  }

  async findOne(id: string): Promise<EmployeeType> {
    return this.employeeModel.findOne({ _id: id }).lean();
  }

  async findAll(): Promise<EmployeeType[]> {
    return this.employeeModel.find().lean();
  }
}
