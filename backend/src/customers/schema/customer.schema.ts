import { Schema } from 'mongoose';

import { Customer } from '../interface/customer.interface';

export const CustomerSchema = new Schema<Customer>(
  {
    name: String,
    firstName: String,
  },
  { timestamps: true },
);
