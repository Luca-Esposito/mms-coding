import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Customer } from './interface/customer.interface';
import { CustomerInput } from './customer.input';
import { CustomerType } from './dto/customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('Customer') private customerModel: Model<Customer>,
  ) {}

  async create(createCustomerDto: CustomerInput): Promise<CustomerType> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return await createdCustomer.save();
  }

  async findOne(id: string): Promise<CustomerType> {
    return this.customerModel.findOne({ _id: id }).lean();
  }
}
