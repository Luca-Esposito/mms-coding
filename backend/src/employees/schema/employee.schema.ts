import { Schema } from 'mongoose';

import { Employee } from '../interface/employee.interface';

export const EmployeeSchema = new Schema<Employee>(
  {
    name: String,
    firstName: String,
  },
  { timestamps: true },
);
